import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = ['../assets/imgs/50cent.jpg', '../assets/imgs/beatleles.jpg', '../assets/imgs/u2.jpg', '../assets/imgs/eminem.jpg'];

  constructor(private router: Router, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  ngOnInit() {
  }

}
