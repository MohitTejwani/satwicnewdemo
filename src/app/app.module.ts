import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { DemosectionComponent } from './demosection/demosection.component';
import { OperationalsectionComponent } from './operationalsection/operationalsection.component';
import { PracticesectionComponent } from './practicesection/practicesection.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesectiionComponent } from './servicesectiion/servicesectiion.component';
import { LovecustomerComponent } from './lovecustomer/lovecustomer.component';
import { ClientComponent } from './client/client.component';
import { IndustriesComponent } from './industries/industries.component';
import { OurteamComponent } from './ourteam/ourteam.component';


const routes: Routes = [
  {path:'test',component:HomeComponent},
  {path:'',component:ScrollspyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollspyComponent,
    ScrollSpyDirective,
    DemosectionComponent,
    OperationalsectionComponent,
    PracticesectionComponent,
    AboutusComponent,
    ServicesectiionComponent,
    LovecustomerComponent,
    ClientComponent,
    IndustriesComponent,
    OurteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
