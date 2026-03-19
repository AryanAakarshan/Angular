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
  showBox=true;
  toggleBox(){
    this.showBox=!this.showBox;
  }
  selection:string='';
}
