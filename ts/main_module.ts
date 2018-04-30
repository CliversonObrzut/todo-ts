import { TaskManager } from './task-manager';
import { Task } from './task';
import { ListView } from './list-view';
import { DataStorage } from './data-storage';

//initialize
var taskArray :Array<any> = [];
var taskStorage = new DataStorage();
var taskManager = new TaskManager(taskArray);
var listView = new ListView('task-list');

// when screens loads
window.addEventListener('load', () => {
    let taskData = taskStorage.read((data) => {
        if(data.length > 0) {
            data.forEach((item) => {
                taskArray.push(item);
            });
            listView.clear();
            listView.render( taskArray );
            fixFooter();
        }
    })
});

// window listener in case of screen resize
window.addEventListener('resize', () => {
    fixFooter();
});

window.addEventListener('click', () => {
    fixFooter();
});

// reference to form
const taskform = <HTMLFormElement>document.getElementById('task-form');
taskform.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    let input = <HTMLInputElement>document.getElementById('task-input');
    let taskName = input.value;
    taskform.reset();
    if (taskName.length > 0) {
        let task = new Task(taskName);
        taskManager.add(task);
        listView.clear();
        taskStorage.store(taskArray, ( result ) => {
            if(result) {
                taskform.reset();
                listView.clear();
                listView.render (taskArray);
            }
            else {
                console.log("something wrong with storage!")
            }
        });
        listView.render (taskArray);
    }
});

const listElement : HTMLElement = document.getElementById('task-list');
listElement.addEventListener('click', (event : Event) => {
    let target: HTMLElement = <HTMLElement> event.target;
    let id = getParentId(<Node> event.target);
    console.log(id);
    if(target.getAttribute('data-function') == 'status') {
        if (id) {
            taskManager.changeStatus(id, () => {
                taskStorage.store( taskArray, () => {
                    listView.clear();
                    listView.render(taskArray);
                });
            });
        }
    }
    if (target.getAttribute('data-function') == 'delete') {
        if (id) {
            taskManager.delete(id, () => {
                taskStorage.store( taskArray, () => {
                    listView.clear();
                    listView.render(taskArray);
                });
            });
        }
    }    
});

function getParentId(elm : Node)
{
    while(elm.parentNode) {
        elm = elm.parentNode;
        let id : string = (<HTMLElement>elm).getAttribute('id');
        if(id) {
            return id;
        }
    }
    return null;
}

// change the css position style from fixed (no scroll in page) to relative (with scroll in page)
// 
function fixFooter() {
    let footer = document.getElementsByTagName("footer");
    if (footer.length != 0) {
        if(window.innerHeight < document.documentElement.scrollHeight) {
            footer[0].style.position = "relative";
            footer[0].style.padding = "0.1px 0";
        }
        else {
            footer[0].style.position = "fixed";
            footer[0].style.padding = "0";
        }        
      }
}