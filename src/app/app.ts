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
  name:string="";
  city:string="";
  email:string="";

  onInput(val:string){
    this.name=val;
  }
  onClick(val:string){
    console.log("clicked");
    this.email=val;
  }

}
