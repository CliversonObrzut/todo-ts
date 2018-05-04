import { Task } from './task';

export class TaskManager{
    tasks: Array<Task>;
    constructor(array: Array<Task>){
        this.tasks = array;
    }

    // add a new task to task array list
    add(task: Task){
        this.tasks.push(task);
        this.sort( this.tasks );
    }

    // it changes the task status from pending to done and vice-versa
    changeStatus(id: string, callback ) : void {
        this.tasks.forEach((task: Task) => {
            if(task.id === id) {
                if(task.status == false) {
                    task.status = true;
                }
                else {
                    task.status = false;
                }
            }
        });
        this.sort( this.tasks );
        callback();
    }

    // to delete a task from the task array list
    delete(id : string, callback) {
        let index_to_remove : number = undefined;
        this.tasks.forEach((item:Task, index : number) => {
            if(item.id == id) {
                index_to_remove = index;
            }
        });
        if (index_to_remove !== undefined) {
            this.tasks.splice(index_to_remove, 1);
        }
        this.sort( this.tasks );
        callback();
    }

    // to re-order the tasks inside the task array list pushing the "done" tasks to the bottom of the list
    sort (tasks : Array<Task>) {
        if(tasks.length >=2) {
            tasks.sort((task1, task2) => {
                if(task1.status == true && task2.status == false) {
                    return 1;
                }
                if(task1.status == false && task2.status == true) {
                    return -1;
                }
                if(task1.status == task2.status) {
                    return 0
                }
            });
            //this.orderActives(tasks);
        }
    }

    // order the active tasks by date (not using at the moment)
    // orderActives (tasks : Array<Task>) {
    //     for(let i=0; i < tasks.length; i++)
    //     {
    //         let j = i + 1;
    //         if(tasks[j].status && (j) != tasks.length) {
    //             if(parseInt(tasks[i].id) > parseInt(tasks[j].id))
    //             {
    //                 console.log(tasks);
    //                 let auxTask = tasks[i];
    //                 tasks[i] = tasks[j];
    //                 tasks[j] = auxTask;
    //             }
    //         }
    //     }
    // }
}