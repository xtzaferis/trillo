import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  root = document.documentElement;
  colors = ["#fff", "#000", "blue", "orange", "green"];

  ngOnInit() {
    // setInterval(() => {
    //   this.root.style.setProperty('--color-primary-light', this.colors[this.getRandomInt(5)]);
    // }, 2000);
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
