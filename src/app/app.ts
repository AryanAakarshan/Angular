import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name="Aryan";
  age=22;
  hi="Tell me about it";
  int=0;
  isadmin=true;
  count = signal(0);
  increment(){
    this.count.update(val => val>9 ? 0 : val+1);
  }
  Decrement(){
    this.count.update(val=>val>0?val-1:val=0);
  }
  
}
