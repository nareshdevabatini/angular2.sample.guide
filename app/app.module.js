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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
//import 'hammerjs';
var main_Service_1 = require('./Services/main.Service');
var app_home_1 = require('./home/app.home');
var app_router_1 = require('./app.router');
var app_router_2 = require('./app.router');
var app_Overview_1 = require('./Overview/app.Overview');
var overview_Filter_1 = require('./Overview/overview.Filter');
var app_overview_edit_1 = require('./Overview/edit/app.overview.edit');
var overview_add_1 = require('./Overview/add/overview.add');
var overview_delete_1 = require('./Overview/delete/overview.delete');
var app_click_directive_1 = require('./Overview/directives/app.click.directive');
var ng2_auto_complete_1 = require('ng2-auto-complete');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, ng2_auto_complete_1.Ng2AutoCompleteModule, material_1.MaterialModule,
                router_1.RouterModule.forRoot(app_router_2.appRoutes, { useHash: true }),
                ng_bootstrap_1.NgbModule.forRoot()],
            //RouterModule.forRoot(appRoutes)],
            declarations: [app_router_1.RouterApp, app_Overview_1.AppComponent, app_home_1.HomeComponent, app_overview_edit_1.AppOverviewEdit, overview_add_1.AppOverviewAdd, overview_delete_1.AppOverviewDelete, app_click_directive_1.ConfirmDirective, overview_Filter_1.OverviewFilter],
            providers: [main_Service_1.MainService],
            exports: [app_click_directive_1.ConfirmDirective],
            //    //  OfferingIndexComponent,
            //],
            bootstrap: [app_router_1.RouterApp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map