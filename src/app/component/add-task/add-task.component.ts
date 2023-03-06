import { Component,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();

Text: string = "";
day: string= "";
reminder: boolean=false;
showAddTask: boolean=false;
subscription?: Subscription;


constructor(
  private uiService: UiService
){
  this.subscription = this.uiService.onToggle()
  .subscribe(value=> this.showAddTask = value)
}


onSubmit(){
if(this.Text.length === 0){
  alert("Please add a task");
  return
}
const {Text,day,reminder}= this
const newTask = {Text, day,reminder}

this.onAddTask.emit(newTask);
}
 

}