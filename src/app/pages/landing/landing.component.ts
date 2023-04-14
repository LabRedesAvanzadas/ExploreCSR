import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { options, fullpage_api } from 'fullpage.js/dist/fullpage.extensions.min';
import {Router} from '@angular/router';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) {
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }
  viewDate: Date = new Date();
  config: options;

  events: CalendarEvent<{ incrementsBadgeTotal: boolean }>[] = [
    {
      title: 'Increments badge total on the day cell',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: new Date(),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: 'Does not increment the badge total on the day cell',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: new Date(),
      meta: {
        incrementsBadgeTotal: false,
      },
    },
  ];

  fullpage_api: fullpage_api;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    autoplay: true,
    navText: ['&#8249', '&#8250;'],
    nav: true
  };

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      day.badgeTotal = day.events.filter(
        (event) => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }


  ngOnInit() {

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}

