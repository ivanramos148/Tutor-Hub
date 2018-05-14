import { Component } from '@angular/core';
import { Beers } from './models/beers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentBeers: Beers[] = [
    new Beers(`pepis`, `https://i.pinimg.com/originals/33/c1/50/33c150f7fca6cad8f8f4239d7378fd50.png`, `this stuff is good owo`)
  ];
  submitForm(newTitle, newPhoto, newDescription){
    const newPost = new Beers(newTitle, newPhoto, newDescription)
    this.currentBeers.unshift(newPost)
  }
  deleteTask(currentBeers){
    var index = this.currentBeers.indexOf(currentBeers);
    this.currentBeers.splice(index, 1);
  }
}
