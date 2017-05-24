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
var app_overview_edit_1 = require('../edit/app.overview.edit');
var ConfirmDirective = (function () {
    function ConfirmDirective(overviewEdit) {
        this.overviewEdit = overviewEdit;
        //confirmFirst() {
        //    this.overviewEdit.openDirective();
        //}
        this.appConfirm = function () { };
    }
    // @Input() confirmMessage = 'Are you sure you want to do this?';
    ConfirmDirective.prototype.Ok = function () {
        this.overviewEdit.openDirective();
        //this.appConfirm();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ConfirmDirective.prototype, "appConfirm", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ConfirmDirective.prototype, "Ok", null);
    ConfirmDirective = __decorate([
        core_1.Directive({
            selector: "[appConfirm]"
        }), 
        __metadata('design:paramtypes', [app_overview_edit_1.AppOverviewEdit])
    ], ConfirmDirective);
    return ConfirmDirective;
}());
exports.ConfirmDirective = ConfirmDirective;
//# sourceMappingURL=app.click.directive.js.map