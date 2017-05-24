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
var AppOverviewEdit = (function () {
    function AppOverviewEdit(mainService, route, router, config) {
        //super(mainService, route, router, config); // extends properties
        var _this = this;
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        //public firstName: string = this.working; // extends properties
        //public ICountries: any = this.countries; // extends properties
        this.person = new PersonModel_1.Person();
        this.getperson = function (data) {
            _this.person = data;
            //this.firstName = data.FirstName;
        };
        this.internalVal = null;
    }
    AppOverviewEdit.prototype.ngOnInit = function () {
        //this.route.params.subscribe(params => {
        //    this.id = +params['id']; // (+) converts string 'id' to a number
        //});
        //this.mainService.getPersonById(this.id)
        //    .subscribe((data: any) => {
        //    this.getperson(data);
        //});
        this.getperson(this.data);
    };
    AppOverviewEdit.prototype.openDirective = function () {
        console.log("custom directives");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppOverviewEdit.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppOverviewEdit.prototype, "countries", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppOverviewEdit.prototype, "data", void 0);
    AppOverviewEdit = __decorate([
        core_1.Component({
            selector: "edit-app",
            //template:'<input type="text" (ngModel)="person.FirstName" />'
            templateUrl: './app/Overview/edit/overview.edit.tpl.html'
        }), 
        __metadata('design:paramtypes', [main_Service_1.MainService, router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbPaginationConfig])
    ], AppOverviewEdit);
    return AppOverviewEdit;
}());
exports.AppOverviewEdit = AppOverviewEdit;
//# sourceMappingURL=app.overview.edit.js.map