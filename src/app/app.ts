import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value: string='about';
  items = ['about', 'contact', 'home'];
  users=[
  {name:'John', age:30},
  {name:'Jane', age:25},
  {name:'Doe', age:35}
  ]
  fruits=['apple', 'banana', 'cherry'];
  delete(i:number){
  this.fruits.splice(i,1);
  }

}
