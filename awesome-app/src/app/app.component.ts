import { Component } from '@angular/core';


interface Task {
  title: string;
  is_cancelled: boolean;
  f_idx: number;
}

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray: Array<Task> = [
    {
      title: 'First task',
      is_cancelled: false,
      f_idx: null
    },
    {
      title: 'Second task',
      is_cancelled: false,
      f_idx: null
    },
    {
      title: 'Third task',
      is_cancelled: false,
      f_idx: null
    }
  ];
  filteredTasks: Array<Task> = [];
  filterBy = '';

  constructor() {
    this.filterTasks();
  }

  clearList() {
    let cnfrm = confirm('Are you sure to delete all tasks?');
    if (cnfrm) {
      this.todoArray.splice(0);
    }
    this.filterTasks();
  }

  addTask(taskInput) {
    let val = taskInput.value;
    taskInput.value = '';
    this.todoArray.push({
      title: val,
      is_cancelled: false,
      f_idx: null
    });
    this.filterTasks();
  }

  cancelTask(idx) {
    this.todoArray[idx].is_cancelled = !this.todoArray[idx].is_cancelled;
    this.filterTasks();
  }

  editTask(idx) {
    let title = this.todoArray[idx].title;
    let result = prompt('Edit Task Title', title);
    if (result != null && result != '') {
      this.todoArray[idx].title = result;
    }
    this.filterTasks();
  }

  deleteTask(idx) {
    let cnfrmd = confirm('Are you sure to delete the task?');
    if (cnfrmd) {
      this.todoArray.splice(idx, 1);
    }
    this.filterTasks();
  }

  filterTasks() {
    const filtered: Array<Task> = [];
    for (let idx = 0; idx < this.todoArray.length; idx++) {
      const task = this.todoArray[idx];
      if (task.title.toLowerCase().includes(this.filterBy)) {
        filtered.push(
          {
            title: task.title,
            is_cancelled: task.is_cancelled,
            f_idx: idx
          }
        );
      }
    }

    this.filteredTasks = filtered;
  }

  addFilter(filterInput) {
    const filter: string = filterInput.value;
    this.filterBy = filter.toLowerCase();
    this.filterTasks();
  }

  clearFilter(filterInput) {
    filterInput.value = '';
    this.filterBy = '';
    this.filterTasks();
  }
}
