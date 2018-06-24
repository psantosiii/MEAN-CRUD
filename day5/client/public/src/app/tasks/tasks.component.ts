import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasks;

  constructor(private noteService:NoteService) { }

  ngOnInit(){
    this.noteService.all(data=>{
      console.log(data);
      this.tasks = data;
    });

    this.noteService.attach(this);
  }
  update(data){
    console.log("")
    this.tasks.push(data);
  }
}
