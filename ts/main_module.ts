class Task {
    id: string; // changed from number to string
    name: string;
    status: boolean;
    constructor (taskname: string){
        this.name = taskname;
        this.id = new Date().getTime().toString();  // converted to string
        this.status = false;
        return this;
    }
}

class TaskManager{
    tasks: Array<Task>;
    constructor(array: Array<Task>){
        this.tasks = array;
    }
    add(task: Task){
        this.tasks.push(task);
        console.log(this.tasks);
    }
    delete(task: Task) {
        let index = this.tasks.indexOf(task,0);
        if(index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log(this.tasks);
    }
}

class ListView{
    list:HTMLElement;
    constructor(listId: string){
        this.list = document.getElementById(listId);
    }

    render(items: Array<Task>){
        items.forEach((task)=>{
            let id = task.id;
            let name = task.name;
            let status = task.status;
            //template literal (new standard in javascript)
            let template = `<li id="${id}" data-status="${status}">
                            <div class="task-container">
                                <div class="task-name">${name}</div>
                                <div class="task-buttons">
                                    <button type="button" data-function="status">&#x2714;</button>
                                    <button idtype="button" data-function="delete">&times;</button>
                                </div>
                            </div>
                            </li>`;
            let fragment = document.createRange().createContextualFragment(template);
            this.list.appendChild(fragment);
        });
    }

    clear(){
        this.list.innerHTML = '';
    }
}

class DataStorage{

    storage:any;
    constructor(){
        this.storage = window.localStorage;
    }
    store( array:Array<Task>){
        let data = JSON.stringify(array);
        this.storage.setItem('taskData', data);
    }
    read(){
        let data = this.storage.getItem('taskData');
        let array = JSON.parse( data );
        return array;
    }
}

//initialize
var taskArray :Array<any> = [];
var taskStorage = new DataStorage();
var taskManager = new TaskManager(taskArray);
var listView = new ListView('task-list');

window.addEventListener('load', () => {
    let taskData = taskStorage.read();
    if(taskData != null){
        taskData.forEach( (item) => {
            taskArray.push(item);
        });
    }   

    listView.render(taskArray);
});



// reference to form
const taskform = <HTMLFormElement>document.getElementById('task-form');
taskform.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    let input = <HTMLInputElement>document.getElementById('task-input');
    let taskName = input.value;
    //console.log(taskname);
    let task = new Task(taskName);
    taskManager.add(task);
    listView.clear();
    taskStorage.store(taskArray);
    listView.render(taskArray);
});