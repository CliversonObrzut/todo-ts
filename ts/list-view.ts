import { Task } from './task';

export class ListView {
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
                                    <button type="button" data-function="delete">&times;</button>
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