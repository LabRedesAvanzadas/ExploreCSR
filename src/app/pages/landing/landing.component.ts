import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { options, fullpage_api } from 'fullpage.js/dist/fullpage.extensions.min';
import {Router} from '@angular/router';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay,
  CalendarView, DAYS_OF_WEEK,
} from 'angular-calendar';
import {  startOfDay,  endOfDay,  subDays,  addDays,  endOfMonth,  isSameDay,  isSameMonth,  addHours,} from 'date-fns';
import { TimelineModule } from 'primeng/timeline';
import * as moment from 'moment';
import { CustomDateFormatter } from './custom-date-formatter-provider';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class LandingComponent implements OnInit {
  timelinEvents: any[];
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  locale: string = 'es-EC';

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

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  config: options;
  minDate: Date = new Date("2023-04-21");
  maxDate: Date = new Date("2023-05-06");
  activeDayIsOpen: boolean = true;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  events: CalendarEvent<{ incrementsBadgeTotal: boolean }>[] = [
    {
      title: '8h30 : Registro de participantes',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '9h00 : Inaguración del evento',
      color: {
        primary: '#f5ff00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '9h30 : Clase Teoria 1 - Carmen Vaca',
      color: {
        primary: '#00f80f',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '10h30 : Clase Práctica 1 - TAWS',
      color: {
        primary: '#001cfa',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '12h00 : Sesión con advisor',
      color: {
        primary: '#b700ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Demos',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '9h00 : Clase Teoria 2 - Carmen Vaca',
      color: {
        primary: '#00f80f',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '10h00 : Clase Práctica 2 - TAWS',
      color: {
        primary: '#001cfa',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '12h00 : Sesión con advisor',
      color: {
        primary: '#b700ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Demos',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '9h00 : Experiencia internacional - Brenda',
      color: {
        primary: '#ef00ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-24')),1),
      end: addDays(endOfDay(new Date('2023-04-24')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '9h00 : Experiencia internacional - Brenda',
      color: {
        primary: '#ef00ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-26')),1),
      end: addDays(endOfDay(new Date('2023-04-26')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Experiencia internacional - Cristina',
      color: {
        primary: '#ef00ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-25')),1),
      end: addDays(endOfDay(new Date('2023-04-25')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Experiencia internacional - Cristina',
      color: {
        primary: '#ef00ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-27')),1),
      end: addDays(endOfDay(new Date('2023-04-27')),1),
      meta: {
        incrementsBadgeTotal: true,
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
    this.timelinEvents = [
      { status: 'Inicio inscripción', date: '01-Feb', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Cierre inscripción', date: '17-Mar', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Anuncio admitidos', date: '01-Abr', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Evento', date: '21-Abr', icon: 'pi pi-check', color: '#607D8B' }
    ];

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}

