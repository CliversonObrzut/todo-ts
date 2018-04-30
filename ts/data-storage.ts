import { Task } from './task';

export class DataStorage {
    storage:any;
    constructor(){
        this.storage = window.localStorage;
    }
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

    read(callback){
        let data = this.storage.getItem('taskData');
        let array = JSON.parse( data );
        callback( array );
    }
}