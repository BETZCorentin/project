import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkippersComponent } from './skippers/skippers.component';
import { SymbolsComponent } from './symbols/symbols.component';
import { BoatsComponent } from './boats/boats.component';
import { DashboardSkipperComponent } from './dashboard-skipper/dashboard-skipper.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HttpClientModule} from '@angular/common/http';

import { DashboardSkipperInfoComponent } from './dashboard-skipper-info/dashboard-skipper-info.component';
import { DashboardSkipperCvComponent } from './dashboard-skipper-cv/dashboard-skipper-cv.component';
import { DashboardSkipperAvailabilityComponent } from './dashboard-skipper-availability/dashboard-skipper-availability.component';
import { DashboardSkipperPaymentComponent } from './dashboard-skipper-payment/dashboard-skipper-payment.component';
import { DashboardSkipperOpportunitiesComponent } from './dashboard-skipper-opportunities/dashboard-skipper-opportunities.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: 'dashboard-skipper-opportunities', component: DashboardSkipperOpportunitiesComponent},
  {path: 'dashboard-skipper-payements', component: DashboardSkipperPaymentComponent},
  {path: 'dashboard-skipper-availability', component: DashboardSkipperAvailabilityComponent},
  {path: 'dashboard-skipper-cv', component: DashboardSkipperCvComponent},
  {path: 'dashboard-skipper-info', component: DashboardSkipperInfoComponent},
  {path: 'dashboard-skipper', component: DashboardSkipperComponent},
  {path: 'boats', component: BoatsComponent },
  {path: 'skippers', component: SkippersComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSearchComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SkippersComponent,
    SymbolsComponent,
    BoatsComponent,
    DashboardSkipperComponent,
    FourOhFourComponent,
    DashboardSkipperInfoComponent,
    DashboardSkipperCvComponent,
    DashboardSkipperAvailabilityComponent,
    DashboardSkipperPaymentComponent,
    DashboardSkipperOpportunitiesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
