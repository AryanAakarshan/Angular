import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKUkwKQAGx-j3jsxwNgxXC9wGn8veHH_jFOW0TunUf7IwpXx0PH6ik3Q&s"
  isDisabled=false;
  name="mohit";
  boxWidth=100;
  bGColor='red';
  count = signal(0);
  increment(){
    this.count.update(c=>c+1)
  }
  showEvent(e:any){
    console.log(e);
  }
  username='';
  updateUser(value:string){
    this.username=value;
  }
  handleSubmit(e:any){
    e.preventDefault();
    console.log('form submitted');
  }
}