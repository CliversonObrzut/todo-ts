import { Task } from './task';
import * as moment from "moment";

export class ListView {
    list:HTMLElement;
    constructor(listId: string){
        this.list = document.getElementById(listId);
    }

    // generates the template of each task on the list passing the task property values to it.
    render(items: Array<Task>){
        items.forEach((task)=>{
            let id = task.id;
            let name = task.name;
            let status = task.status;
            let when = this.getTimeSpan(id);
            //template literal (new standard in javascript)
            let template = `<li id="${id}" data-status="${status}">
                            <div class="task-container">
                                <div class="task-name">
                                    ${name}
                                    <br/>
                                    <span class="task-date">${when}</span>
                                </div>
                                <div class="task-buttons">
                                    <button class="far fa-trash-alt" type="button" data-function="delete"></button>
                                    <button class="fas fa-check" type="button" data-function="status"></button>                                    
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

    // using moment js library.
    // retrieves the difference in time from when the task was created and the current time
    // It returns a formatted string saying the difference in seconds, minutes, hours, days, months and years
    private getTimeSpan(id: string) : string {
        let when = moment(id,'x').fromNow();
        return when;
    }
}