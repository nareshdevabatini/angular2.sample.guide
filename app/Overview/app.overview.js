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
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/switchMap');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var main_Service_1 = require('../Services/main.Service');
var personRequest_model_1 = require('../models/personRequest.model');
var AppComponent = (function () {
    function AppComponent(mainService, route, router, config) {
        var _this = this;
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.name = "23423";
        this.working = "Student";
        this.showEdit = false;
        this.firstname_sort = true;
        this.lastName_sort = true;
        this.address_sort = true;
        this.mobileno_sort = true;
        this.country_sort = true;
        //Pagination
        this.page = 0;
        this.count = 0;
        this.pagesize = 3;
        this.noOfPages = 0;
        this.model = new personRequest_model_1.PersonRequest(0, "", this.page, this.pagesize, "", "", "");
        this.bindCountry = function (data) {
            _this.countries = data;
            _this.googleGeoCode = data;
            _this.noOfPages = Math.ceil(_this.count / _this.pagesize);
            _this.pages = Array(_this.noOfPages).fill(1);
            debugger;
        };
        this.bindPersons = function (data) {
            _this.persons = data.person;
            _this.count = data.count;
        };
        var model = new personRequest_model_1.PersonRequest(0, "", this.page, this.pagesize, "FirstName_desc", "", "");
        this.mainService.getAllPersons(model).subscribe(function (data) {
            _this.bindPersons(data);
        });
        config.size = 'sm';
        config.boundaryLinks = true;
    }
    AppComponent.prototype.getOrder = function (order, name, sort) {
        var model = new personRequest_model_1.PersonRequest(0, "", 0, this.pagesize, order, "", "");
        model.sortOrder = order;
        if (name == "firstname_sort") {
            this.firstname_sort = !sort;
        }
        else if (name == "lastName_sort") {
            this.lastName_sort = !sort;
        }
        else if (name == "address_sort") {
            this.address_sort = !sort;
        }
        else if (name == "mobileno_sort") {
            this.mobileno_sort = !sort;
        }
        else {
            this.country_sort = !sort;
        }
        this.getPersonData(model);
    };
    //NgbPaginationConfig() {
    //}
    //Pagination
    AppComponent.prototype.paginationConfig = function (page) {
        this.model.skipCount = page;
        this.getPersonData(this.model);
    };
    AppComponent.prototype.getPersonData = function (model) {
        var _this = this;
        this.mainService.getAllPersons(model).subscribe(function (data) {
            _this.bindPersons(data);
        });
    };
    //numberOfPages(){
    //    return Math.ceil(this.count/ this.pagesize);
    //}
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getCounties().flatMap(function (result) {
            return _this.mainService.getCounties();
        }).subscribe(function (data) {
            _this.bindCountry(data);
        });
    };
    AppComponent.prototype.OnCountryChange = function (value) {
        var _this = this;
        this.mainService.getCounties().flatMap(function (result) {
            return _this.mainService.getCounties();
        }).subscribe(function (data) {
            _this.bindCountry(data);
        });
    };
    AppComponent.prototype.OnCountryDDChange = function (value) {
        debugger;
    };
    //person.showRow = false;
    AppComponent.prototype.showRole = function (person) {
        this.name = person.Id;
        person.showRow = !person.showRow;
        var element = document.getElementsByClassName('sub_' + person.Id)[0].getAttribute("style");
        if (element != null) {
            document.getElementsByClassName('sub_' + person.Id)[0].removeAttribute('style');
        }
        else {
            document.getElementById('sub_' + person.Id).style.display = "none";
        }
    };
    AppComponent.prototype.pageChanged = function (event) {
        var _this = this;
        var pageno = event.target.innerHTML - 1;
        var model = new personRequest_model_1.PersonRequest(0, "", pageno, this.pagesize, "FirstName_desc", "", "");
        this.mainService.getAllPersons(model).
            subscribe(function (data) {
            _this.bindPersons(data);
        });
    };
    AppComponent.prototype.getParentByTagName = function (node, tagname) {
        var parent;
        if (node === null || tagname === '')
            return;
        parent = node.parentNode;
        tagname = tagname.toUpperCase();
        while (parent.tagName !== "HTML") {
            if (parent.tagName === tagname) {
                return parent;
            }
            parent = parent.parentNode;
        }
        return parent;
    };
    AppComponent.prototype.rowBound = function (person) {
        return false;
    };
    // filter(name: string): string {
    // return this.countries.filter(c => new RegExp(name, 'gi').test(data));
    // }
    AppComponent.prototype.editPerson = function (Id, type, person) {
        if (Id > 0 && type == "edit") {
            var element = document.getElementsByClassName('editRow_' + Id);
            var count = element.length;
            for (var i = 0; i < count; i++) {
                element[i].classList.remove("hideRow");
            }
            var hideElement = document.getElementsByClassName('showRow_' + Id);
            var count = hideElement.length;
            for (var i = 0; i < count; i++) {
                hideElement[i].classList.add("hideRow");
            }
        }
        else if (person != undefined && type == "updated") {
            var element = document.getElementsByClassName('showRow_' + Id);
            var count = element.length;
            for (var i = 0; i < count; i++) {
                element[i].classList.remove("hideRow");
            }
            var hideElement = document.getElementsByClassName('editRow_' + Id);
            var count = hideElement.length;
            for (var i = 0; i < count; i++) {
                hideElement[i].classList.add("hideRow");
            }
        }
    };
    AppComponent.prototype.editPerson1 = function (person) {
        this.route.params
            .switchMap(function (params) {
            return person.Id;
        });
        this.id = person.Id;
        this.router.navigate(["/Overview/Edit", person.Id], { relativeTo: this.route });
    };
    AppComponent.prototype.OneditPerson = function (person) {
        this.data = person;
        this.showEdit = true;
    };
    AppComponent.prototype.deletePerson = function (person) {
        this.route.params
            .switchMap(function (params) {
            return person.Id;
        }).subscribe(function (prsn) { return prsn = person; });
        ;
        this.id = person.Id;
        this.router.navigate(["/Overview/Delete", person.Id], { relativeTo: this.route });
    };
    AppComponent.prototype.getPersons = function (row) {
        this.country = row;
        //var obj = this.countries.filter(
        //    country => country.name == row
        //);
        ////var countryCode = this.countries.ToList().Where(x => name == row).FirstOrDefault();
        //var model = new PersonRequest(0, "", 0, 5, "FirstName_desc", "", obj[0].CountryCode);
        //this.mainService.getAllPersons(model).
        //    subscribe(
        //    data => this.persons = data
        //    );
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "globalData", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sms-app',
            templateUrl: './app/Overview/overview.tpl.html',
            providers: [ng_bootstrap_1.NgbPaginationConfig]
        }), 
        __metadata('design:paramtypes', [main_Service_1.MainService, router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbPaginationConfig])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.overview.js.map