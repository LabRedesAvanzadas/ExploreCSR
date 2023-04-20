import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import { DemosComponent } from './pages/demos/demos.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import {TimelineModule} from 'primeng/timeline';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es-EC';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {ToastrModule} from 'ngx-toastr';
registerLocaleData(localeEs);

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    DemosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularFullpageModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: momentAdapterFactory}),
    TimelineModule,
    NgxSmartModalModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
