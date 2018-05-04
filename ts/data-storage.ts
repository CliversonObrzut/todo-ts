import { Task } from './task';

export class DataStorage {
    storage:any;
    constructor(){
        this.storage = window.localStorage;
    }

    // records the task array list into the localStorage, including or updating values.
    store( array:Array<Task>, callback){
        let data = JSON.stringify(array);
        let storeStatus = this.storage.setItem('taskData', data);
        if (storeStatus) {
            callback (true);
        }
        else {
            callback (false);
        }
    }

    // read the tasks data from localStorage and parse to an array list.
    read(callback){
        let data = this.storage.getItem('taskData');
        let array = JSON.parse( data );
        callback( array );
    }
}