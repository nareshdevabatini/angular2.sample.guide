import { Component } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MainService } from '../Services/main.Service'
import { PersonRequest } from '../models/personRequest.model';

@Component({
    selector: "hme-app",
    templateUrl: "../app/home/home.tpl.html",
    providers: [NgbPaginationConfig]
})
export class HomeComponent {
    model: NgbDateStruct;
    public persons: any;
    public page: number = 1;
    public count: number = 0;
    public pagesize: number = 3;
 
    constructor(public mainService: MainService,
        public route: ActivatedRoute,
        public router: Router
        , config: NgbPaginationConfig) {
        var model = new PersonRequest(0, "", 0, this.pagesize, "FirstName_desc", "", "");

        
        this.mainService.getAllPersons(model).subscribe((data: any) => {
            this.bindPersons(data)
        });
        
    }
    bindPersons: any = (data: any): void => {
        this.persons = data.person;
        this.count = data.count;
    }

    rowBound(person: any) {
        return true;
    }
}