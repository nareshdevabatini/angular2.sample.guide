"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var app_Overview_1 = require('./Overview/app.Overview');
var app_home_1 = require('./home/app.home');
var app_overview_edit_1 = require('./Overview/edit/app.overview.edit');
var overview_add_1 = require('./Overview/add/overview.add');
var overview_delete_1 = require('./Overview/delete/overview.delete');
var main_Service_1 = require('./Services/main.Service');
var RouterApp = (function () {
    function RouterApp(route, router, mainService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.data = "naresh";
        this.bindCountry = function (data) {
            //this.countries = data;
            //this.googleGeoCode = data;
        };
        this.mainService.getCounties().flatMap(function (result) {
            return _this.mainService.getCounties();
        }).subscribe(function (data) {
            _this.bindCountry(data);
        });
    }
    RouterApp.prototype.ngOnInit = function () {
        this.router.navigate(["Overview"]);
    };
    RouterApp.prototype.goto = function (link) {
        this.router.navigate([link]);
    };
    RouterApp.prototype.init = function () {
        this.router.navigate(["Overview"]);
        return false;
    };
    RouterApp = __decorate([
        core_1.Component({
            selector: "main-app",
            templateUrl: "./app/main.tpl.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, main_Service_1.MainService])
    ], RouterApp);
    return RouterApp;
}());
exports.RouterApp = RouterApp;
//export const homeRoutes: Routes = [
//    { path: 'Overview', component: AppComponent },
//    { path: 'Home', component: HomeComponent }
//];
exports.appRoutes = [
    {
        path: 'Overview', component: app_Overview_1.AppComponent,
        data: { preload: true },
        children: [{
                path: 'Edit/:id',
                component: app_overview_edit_1.AppOverviewEdit //, data: { preload: true }
            },
            {
                path: 'Add',
                component: overview_add_1.AppOverviewAdd
            },
            {
                path: 'Delete/:id',
                component: overview_delete_1.AppOverviewDelete, data: { preload: true }
            }
        ]
    },
    {
        path: 'Home', component: app_home_1.HomeComponent
    },
    {
        path: 'Edit', component: app_overview_edit_1.AppOverviewEdit
    },
];
//# sourceMappingURL=app.router.js.map