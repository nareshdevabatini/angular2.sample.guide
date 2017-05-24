import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
//import 'hammerjs';

import { MainService } from './Services/main.Service';
import { HomeComponent } from './home/app.home';
import { RouterApp } from './app.router';
import { appRoutes } from './app.router'
import { AppComponent } from './Overview/app.Overview';
import { OverviewFilter } from './Overview/overview.Filter';
import { AppOverviewEdit } from './Overview/edit/app.overview.edit'
import { AppOverviewAdd } from './Overview/add/overview.add';
import { AppOverviewDelete } from './Overview/delete/overview.delete';
import { ConfirmDirective } from './Overview/directives/app.click.directive';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, Ng2AutoCompleteModule, MaterialModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        NgbModule.forRoot()],
        //RouterModule.forRoot(appRoutes)],
    declarations: [RouterApp, AppComponent, HomeComponent, AppOverviewEdit, AppOverviewAdd, AppOverviewDelete, ConfirmDirective, OverviewFilter],//, routingComponents
    providers: [MainService],
    exports: [ConfirmDirective],
    //    //  OfferingIndexComponent,
    //],
    bootstrap: [RouterApp ]
})

export class AppModule { }
