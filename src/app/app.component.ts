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
    new Beers('newWorld')
  ];
  submitForm(newWorld: Beers){
    this.currentBeers.unshift(new Beers(newWorld))
    console.log(newWorld)
  }
}
