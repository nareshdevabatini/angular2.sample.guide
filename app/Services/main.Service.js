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
var http_1 = require('@angular/http');
//import 'rxjs/rxjs'
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
        this._url = "api/persons/getAllbyRequest";
        this._urlId = "api/persons/getbyid";
    }
    MainService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    MainService.prototype.extractPersons = function (res) {
        var _this = this;
        this.persons = res;
        var timeOutId = setTimeout(function () {
            debugger;
            _this.persons = null;
            _this.personReq = null;
        }, 20000);
        clearTimeout(timeOutId);
        var body = res.json();
        return body || {};
    };
    MainService.prototype.extractPerson = function (res) {
        var body = res.json();
        return body || {};
    };
    MainService.prototype.extractLanguage = function (res) {
        var body = res.json();
        return body.country || {};
    };
    MainService.prototype.getAllPersons = function (personRequest) {
        //if (this.personReq == personRequest && (this.persons != undefined || this.persons != null)) {
        this.personReq = personRequest;
        this.persons = personRequest;
        var body = JSON.stringify(personRequest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._url, body, options)
            .map(this.extractPersons)
            .catch(this.handleError);
    };
    MainService.prototype.getCounties = function () {
        return this._http.get("api/persons/country/getAll")
            .map(this.extractLanguage)
            .catch(this.handleError);
    };
    MainService.prototype.getPersonById = function (id) {
        var body = JSON.stringify({ id: id });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._urlId + '/' + id, body, options).
            map(this.extractPerson).catch(this.handleError);
    };
    MainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
//# sourceMappingURL=main.Service.js.map