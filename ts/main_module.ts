class Task {
    id: number;
    name: string;
    status: boolean;
    constructor (taskname: string){
        this.name = taskname;
        this.id = new Date().getTime();
        this.status = false;
        return this;
    }
}

// reference to form
const taskform = document.getElementById('task-form');
taskform.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    let input = <HTMLInputElement>document.getElementById('task-input');
    let taskname = input.value;
    console.log(taskname);
});