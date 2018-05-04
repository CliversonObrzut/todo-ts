export class Task {
    id: string; // changed from number to string
    name: string;
    status: boolean;
    constructor (taskname: string){
        this.name = taskname;
        this.id = new Date().getTime().toString();  // converted to string
        console.log(this.id);
        this.status = false;
        return this;
    }
}