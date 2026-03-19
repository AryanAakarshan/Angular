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
  name=signal("");
  onInput(event:any){
    this.name.set(event.target.value)
  }
  onclick(event:any){
    this.name=event.target.value;
  }
  onKeyUp(event:any){
    console.log("Key Pressed ",event.key);
  }
  onHover(){
    console.log("Entered");
  }
  onLeave(){
    console.log("Left");
  }
  onFocus(){
    console.log("Focused");
  }
  onblur(){
    console.log("Blured");
  }

}
