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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var router_1 = require('@angular/router');
var main_Service_1 = require('../Services/main.Service');
var personRequest_model_1 = require('../models/personRequest.model');
var HomeComponent = (function () {
    function HomeComponent(mainService, route, router, config) {
        var _this = this;
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.count = 0;
        this.pagesize = 3;
        this.bindPersons = function (data) {
            _this.persons = data.person;
            _this.count = data.count;
        };
        var model = new personRequest_model_1.PersonRequest(0, "", 0, this.pagesize, "FirstName_desc", "", "");
        this.mainService.getAllPersons(model).subscribe(function (data) {
            _this.bindPersons(data);
        });
    }
    HomeComponent.prototype.rowBound = function (person) {
        return true;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "hme-app",
            templateUrl: "../app/home/home.tpl.html",
            providers: [ng_bootstrap_1.NgbPaginationConfig]
        }), 
        __metadata('design:paramtypes', [main_Service_1.MainService, router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbPaginationConfig])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=app.home.js.map