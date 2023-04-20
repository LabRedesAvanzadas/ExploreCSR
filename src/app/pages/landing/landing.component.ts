import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
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
import {
  subMonths,
  addMonths,
  addDays,
  addWeeks,
  subDays,
  subWeeks,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay, isSameDay, isSameMonth,
} from 'date-fns';
import { TimelineModule } from 'primeng/timeline';
import * as moment from 'moment';
import { CustomDateFormatter } from './custom-date-formatter-provider';
type CalendarPeriod = 'day' | 'week' | 'month';

function addPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: addDays,
    week: addWeeks,
    month: addMonths,
  }[period](date, amount);
}

function subPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: subDays,
    week: subWeeks,
    month: subMonths,
  }[period](date, amount);
}

function startOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth,
  }[period](date);
}

function endOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: endOfDay,
    week: endOfWeek,
    month: endOfMonth,
  }[period](date);
}

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

  timelinEvents: any[];
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  locale = 'es-EC';

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  config: options;
  minDate: Date = new Date('2023-04-20');
  maxDate: Date = new Date('2023-05-08');
  activeDayIsOpen = true;
  prevBtnDisabled = false;
  nextBtnDisabled = false;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-info-circle"></i>',
      a11yLabel: 'Info',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.router.navigate(['demos']);
      },
    },
  ];

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
      title: '9h30 : Introducción a ML - Ph.D Carmen Vaca',
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
      title: '10h30 : Clase Práctica 1 - Grupo estudiantil TAWS',
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
      title: '11h30 : Break',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '12h00 : Taller de investigación - Ph.D. Christian Galarza - Ph.D. Edwin Valarezo   ',
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
      title: '13h00 : Almuerzo',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Demos - Dreambooth, Agricultura Inteligente, y más a cargo de TAWS, CIAP y PHYCOM',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-21')),1),
      end: addDays(endOfDay(new Date('2023-04-21')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
      actions: this.actions
    },
    {
      title: '9h00 : Clase Teórica - Ing. Eunice Gálvez',
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
      title: '10h00 : Clase Práctica ML - Grupo estudiantil TAWS',
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
      title: '11h30 : Break',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '12h00 : Taller de investigación - Ph.D. Christian Galarza - Ph.D. Edwin Valarezo   ',
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
      title: '13h00 : Almuerzo',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Demos - Dreambooth, Agricultura Inteligente, y más a cargo de TAWS, CIAP y PHYCOM',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-04-22')),1),
      end: addDays(endOfDay(new Date('2023-04-22')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
      actions: this.actions
    },
    {
      title: '9h00 : Experiencia internacional - Canadá - Brenda Cobeña',
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
      title: '9h00 : Experiencia internacional - Canadá - Brenda Cobeña',
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
      title: '14h00 : Experiencia internacional - Países Bajos - Cristina Guerrero',
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
      title: '14h00 : Experiencia internacional - Países Bajos - Cristina Guerrero',
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
    {
      title: '9h00 : Introducción a Deep Learning - Ph.D. Christian Tutivén',
      color: {
        primary: '#00f80f',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-05')),1),
      end: addDays(endOfDay(new Date('2023-05-05')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '10h00 : Clase Práctica DL - Grupo estudiantil CIAP',
      color: {
        primary: '#001cfa',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-05')),1),
      end: addDays(endOfDay(new Date('2023-05-05')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '12h30 : Almuerzo',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-05')),1),
      end: addDays(endOfDay(new Date('2023-05-05')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Experiencia Comercial - Empresas invitadas: Manexware y Servinformación',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-05')),1),
      end: addDays(endOfDay(new Date('2023-05-05')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
      actions: this.actions
    },
    {
      title: '15h30 : Panel de discusión - IA en el campo Laboral - Empresas invitadas, Ph.D. José Córdova',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-05')),1),
      end: addDays(endOfDay(new Date('2023-05-05')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
      actions: this.actions
    },
    {
      title: '9h00 : Clase Teórica DL - Ph.D. Christian Tutivén ',
      color: {
        primary: '#00f80f',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '10h00 : Clase Práctica DL - Grupo estudiantil CIAP',
      color: {
        primary: '#001cfa',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '11h30 : Break',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '12h00 : Experiencia MsC. / Ph.D - ¿Cómo realizar maestrías y doctorados?',
      color: {
        primary: '#b700ff',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '13h00 : Almuerzo',
      color: {
        primary: '#b5ffb2',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
    },
    {
      title: '14h00 : Taller de investigación - Identificación de problemáticas',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
      actions: this.actions
    },
    {
      title: '15h00 : Exposición de posters - Identificación de problemáticas',
      color: {
        primary: '#ff5a00',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
      meta: {
        incrementsBadgeTotal: true,
      },
      actions: this.actions
    },
    {
      title: '15h30 : Premiación y cierre',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: addDays(startOfDay(new Date('2023-05-06')),1),
      end: addDays(endOfDay(new Date('2023-05-06')),1),
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

  today(): void {
    this.changeDate(new Date());
  }

  decrement(): void {
    this.changeDate(subPeriod(this.view, this.viewDate, 1));
  }
  increment(): void {
    this.changeDate(addPeriod(this.view, this.viewDate, 1));
  }
  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }
  dateOrViewChanged(): void {
    this.prevBtnDisabled = !this.dateIsValid(
      endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1))
    );
    this.nextBtnDisabled = !this.dateIsValid(
      startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1))
    );
    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }
  dateIsValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }


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

