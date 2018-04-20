(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Task = /** @class */ (function () {
    function Task(taskname) {
        this.name = taskname;
        this.id = new Date().getTime().toString(); // converted to string
        this.status = false;
        return this;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(array) {
        this.tasks = array;
    }
    TaskManager.prototype.add = function (task) {
        this.tasks.push(task);
        console.log(this.tasks);
    };
    TaskManager.prototype["delete"] = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log(this.tasks);
    };
    return TaskManager;
}());
var ListView = /** @class */ (function () {
    function ListView(listId) {
        this.list = document.getElementById(listId);
    }
    ListView.prototype.render = function (items) {
        var _this = this;
        items.forEach(function (task) {
            var id = task.id;
            var name = task.name;
            var status = task.status;
            //template literal (new standard in javascript)
            var template = "<li id=\"" + id + "\" data-status=\"" + status + "\">\n                            <div class=\"task-container\">\n                                <div class=\"task-name\">" + name + "</div>\n                                <div class=\"task-buttons\">\n                                    <button type=\"button\" data-function=\"status\">&#x2714;</button>\n                                    <button type=\"button\" data-function=\"delete\">&times;</button>\n                                </div>\n                            </div>\n                            </li>";
            var fragment = document.createRange().createContextualFragment(template);
            _this.list.appendChild(fragment);
        });
    };
    ListView.prototype.clear = function () {
        this.list.innerHTML = '';
    };
    return ListView;
}());
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.storage = window.localStorage;
    }
    DataStorage.prototype.store = function (array) {
        var data = JSON.stringify(array);
        this.storage.setItem('taskData', data);
    };
    DataStorage.prototype.read = function () {
        var data = this.storage.getItem('taskData');
        var array = JSON.parse(data);
        return array;
    };
    return DataStorage;
}());
//initialize
var taskArray = [];
var taskStorage = new DataStorage();
var taskManager = new TaskManager(taskArray);
var listView = new ListView('task-list');
window.addEventListener('load', function () {
    var taskData = taskStorage.read();
    if (taskData != null) {
        taskData.forEach(function (item) {
            taskArray.push(item);
        });
    }
    listView.render(taskArray);
});
// reference to form
var taskform = document.getElementById('task-form');
taskform.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('task-input');
    var taskName = input.value;
    //console.log(taskname);
    var task = new Task(taskName);
    taskManager.add(task);
    listView.clear();
    taskStorage.store(taskArray);
    listView.render(taskArray);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBSUksY0FBYSxRQUFnQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBRSxzQkFBc0I7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsV0FBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBRUQ7SUFFSSxxQkFBWSxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QseUJBQUcsR0FBSCxVQUFJLElBQVU7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsc0JBQUEsUUFBTSxDQUFBLEdBQU4sVUFBTyxJQUFVO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxrQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7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O0lBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIFRhc2sge1xyXG4gICAgaWQ6IHN0cmluZzsgLy8gY2hhbmdlZCBmcm9tIG51bWJlciB0byBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHN0YXR1czogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yICh0YXNrbmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0YXNrbmFtZTtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTsgIC8vIGNvbnZlcnRlZCB0byBzdHJpbmdcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrTWFuYWdlcntcclxuICAgIHRhc2tzOiBBcnJheTxUYXNrPjtcclxuICAgIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUYXNrPil7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IGFycmF5O1xyXG4gICAgfVxyXG4gICAgYWRkKHRhc2s6IFRhc2spe1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSh0YXNrOiBUYXNrKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50YXNrcy5pbmRleE9mKHRhc2ssMCk7XHJcbiAgICAgICAgaWYoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaXN0Vmlld3tcclxuICAgIGxpc3Q6SFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihsaXN0SWQ6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaXRlbXM6IEFycmF5PFRhc2s+KXtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCh0YXNrKT0+e1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0YXNrLmlkO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHRhc2submFtZTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRhc2suc3RhdHVzO1xyXG4gICAgICAgICAgICAvL3RlbXBsYXRlIGxpdGVyYWwgKG5ldyBzdGFuZGFyZCBpbiBqYXZhc2NyaXB0KVxyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBgPGxpIGlkPVwiJHtpZH1cIiBkYXRhLXN0YXR1cz1cIiR7c3RhdHVzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtZnVuY3Rpb249XCJzdGF0dXNcIj4mI3gyNzE0OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwiZGVsZXRlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgICAgICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF0YVN0b3JhZ2V7XHJcblxyXG4gICAgc3RvcmFnZTphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgICB9XHJcbiAgICBzdG9yZSggYXJyYXk6QXJyYXk8VGFzaz4pe1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKCd0YXNrRGF0YScsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgcmVhZCgpe1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5zdG9yYWdlLmdldEl0ZW0oJ3Rhc2tEYXRhJyk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZSggZGF0YSApO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxufVxyXG5cclxuLy9pbml0aWFsaXplXHJcbnZhciB0YXNrQXJyYXkgOkFycmF5PGFueT4gPSBbXTtcclxudmFyIHRhc2tTdG9yYWdlID0gbmV3IERhdGFTdG9yYWdlKCk7XHJcbnZhciB0YXNrTWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlcih0YXNrQXJyYXkpO1xyXG52YXIgbGlzdFZpZXcgPSBuZXcgTGlzdFZpZXcoJ3Rhc2stbGlzdCcpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgdGFza0RhdGEgPSB0YXNrU3RvcmFnZS5yZWFkKCk7XHJcbiAgICBpZih0YXNrRGF0YSAhPSBudWxsKXtcclxuICAgICAgICB0YXNrRGF0YS5mb3JFYWNoKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gICBcclxuXHJcbiAgICBsaXN0Vmlldy5yZW5kZXIodGFza0FycmF5KTtcclxufSk7XHJcblxyXG4vLyByZWZlcmVuY2UgdG8gZm9ybVxyXG5jb25zdCB0YXNrZm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xyXG50YXNrZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQnKTtcclxuICAgIGxldCB0YXNrTmFtZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0YXNrbmFtZSk7XHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lKTtcclxuICAgIHRhc2tNYW5hZ2VyLmFkZCh0YXNrKTtcclxuICAgIGxpc3RWaWV3LmNsZWFyKCk7XHJcbiAgICB0YXNrU3RvcmFnZS5zdG9yZSh0YXNrQXJyYXkpO1xyXG4gICAgbGlzdFZpZXcucmVuZGVyKHRhc2tBcnJheSk7XHJcbn0pOyJdfQ==
