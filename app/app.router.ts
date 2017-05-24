import { Router, RouterModule, Routes, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from './Overview/app.Overview';
import { HomeComponent } from './home/app.home'
import { AppOverviewEdit } from './Overview/edit/app.overview.edit';

import { AppOverviewAdd } from './Overview/add/overview.add';
import { AppOverviewDelete } from './Overview/delete/overview.delete';


import { MainService } from './Services/main.Service'

@Component({
    selector: "main-app",
    templateUrl: "./app/main.tpl.html"
})
export class RouterApp {
    public data: string = "naresh";
    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public mainService: MainService
    ) {
        this.mainService.getCounties().flatMap(result => {
            return this.mainService.getCounties();
        }).subscribe((data: any) => {
            this.bindCountry(data)
        });
    }
    ngOnInit() {
        this.router.navigate(["Overview"]);
    }
    goto(link: string) {
        this.router.navigate([link]);
    }
    init() {
        this.router.navigate(["Overview"]);
        return false;
    }
    bindCountry: any = (data: any): void => {
        //this.countries = data;
        //this.googleGeoCode = data;
    }
}

//export const homeRoutes: Routes = [
//    { path: 'Overview', component: AppComponent },
//    { path: 'Home', component: HomeComponent }
//];

export const appRoutes: Routes = [
    {
        path: 'Overview', component: AppComponent
        , data: { preload: true },
        children: [{
            path: 'Edit/:id',
            component: AppOverviewEdit//, data: { preload: true }
        },
            {
                path: 'Add',
                component: AppOverviewAdd
            },
            {
                path: 'Delete/:id',
                component: AppOverviewDelete, data: { preload: true }
            }
        ]
    },
    {
        path: 'Home', component: HomeComponent
    },
    {
        path: 'Edit', component: AppOverviewEdit
    },
    //{ path: 'Edit', component: AppOverviewEdit },
    //{ path: '**', pathMatch: 'full', component: AppComponent } 
];
