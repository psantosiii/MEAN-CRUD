import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NoteService {
	constructor(private http:HttpClient){}
	private listeners = [];

	attach(components){
		this.listeners.push(components);
	}

	notify(data){
		for(let listener of this.listeners){
			listener.update(data);///fix this
		}
	}

	create(task,cb){
		this.http.post("/api/tasks",task)
		.subscribe( data => cb( data ) );
	}

	all(cb){
		this.http.get("/api/tasks")
		.subscribe( data => cb (data) );
	}
}
