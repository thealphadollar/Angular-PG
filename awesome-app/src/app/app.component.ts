import { Component } from '@angular/core';

interface ISocialLink {
  link: string;
  title: string;
  is_active: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Shivam';
  profession = 'Student';
  website = 'thealphadollar.github.io';
  time = new Date();
  count = 0;
  socialLinks: ISocialLink[] = [
    {link: 'https://www.github.com/thealphadollar', title: 'Github', is_active: true},
    {link: 'https://www.facebook.com/thealphadollar', title: 'Facebook', is_active: true}
  ];
  textColorClass = 'white green_bg';
  currentQuote = '';
  quotes = [];
  inputData = '';

  constructor() {
    setTimeout(() => {
      this.profession = 'Learner';
    }, 1000);

    setTimeout(() => {
      this.textColorClass = 'yellowgreen green_bg';
    }, 2000);

    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  handleClick() {
    this.count += 1;
  }

  removeItem(idx) {
    this.socialLinks.splice(idx, 1);
  }

  displayQuote(evnt) {
    if (evnt.target.value) {
      this.currentQuote = evnt.target.value;
    }
  }

  saveQuote() {
    if (this.currentQuote) {
      this.quotes.push(this.currentQuote);
    }
  }

}
