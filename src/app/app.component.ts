import { Component } from '@angular/core';
import { NewsFeed } from './models/beers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideAbout = null
  changeAbout = null;
  aboutMe = []
  currentFeed: NewsFeed[] = [
    new NewsFeed(`Olan Rodger`, `https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1509/vadymvdrobot150900446/45025475-closeup-portrait-of-a-handsome-man-at-gym.jpg`, `Computer Science`),
    new NewsFeed(`Emily Anderson`, `http://www.slate.com/content/dam/slate/blogs/xx_factor/2014/susan.jpg.CROP.promo-mediumlarge.jpg`, `math`),
    new NewsFeed(`Neil Parson`, `https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&h=350`, `Science`),
    new NewsFeed(`Jasim Gonzalez`, `http://www.ifred.org/wp-content/uploads/2014/11/woman.jpg`, `Science`),
    new NewsFeed(`Alex Rax`, `https://i.kinja-img.com/gawker-media/image/upload/s--_DBGLHVf--/c_scale,f_auto,fl_progressive,q_80,w_800/eibgv7kctah62iddzywm.jpg`, `History`)
  ];
  submitForm(newTitle, newPhoto, newDescription) {
    const newPost = new NewsFeed(newTitle, newPhoto, newDescription)
    this.currentFeed.unshift(newPost)
  }
  deleteTask(currentFeed) {
    var index = this.currentFeed.indexOf(currentFeed);
    this.currentFeed.splice(index, 1);
  }
  editProfile(currentFeed) {
    this.changeAbout = currentFeed;
  }
  doneEdit() {
    this.changeAbout = null;
  }
  aboutSection(){
    this.hideAbout = this.aboutMe;
  }
  hideSection() {
    this.hideAbout = null;
  }
}
