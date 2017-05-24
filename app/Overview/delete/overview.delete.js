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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var main_Service_1 = require('../../Services/main.Service');
var PersonModel_1 = require('../../models/PersonModel');
var AppOverviewDelete = (function () {
    function AppOverviewDelete(mainService, route, router, config) {
        // super(mainService, route, router, NgbPaginationConfig);
        var _this = this;
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.firstName = "data";
        this.person = new PersonModel_1.Person();
        this.getperson = function (data) {
            _this.person = data;
            _this.firstName = data.FirstName;
        };
    }
    AppOverviewDelete.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        this.mainService.getPersonById(this.id)
            .subscribe(function (data) {
            _this.getperson(data);
        });
    };
    AppOverviewDelete = __decorate([
        core_1.Component({
            selector: "add-app",
            templateUrl: './app/Overview/delete/overview.delete.tpl.html'
        }), 
        __metadata('design:paramtypes', [main_Service_1.MainService, router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbPaginationConfig])
    ], AppOverviewDelete);
    return AppOverviewDelete;
}());
exports.AppOverviewDelete = AppOverviewDelete;
//# sourceMappingURL=overview.delete.js.map