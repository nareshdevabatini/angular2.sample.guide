import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { MainService } from '../Services/main.Service'
import { PersonRequest } from '../models/personRequest.model';
import { Country } from '../models/country.model';

@Component({
    selector: 'sms-app',
    templateUrl: './app/Overview/overview.tpl.html',
    providers: [NgbPaginationConfig]
})

export class AppComponent implements OnInit{
    @Input() globalData: string;
    public persons: any;
    public countries: Country[];
    public country: any;
    public id: number;
    public name: string = "23423";
    public working: string = "Student";
    public googleGeoCode: string;
    
    public showEdit: boolean = false;
    public data: any;
    public countryCode: string;
    public firstname_sort: boolean =true;
    public lastName_sort: boolean = true;
    public address_sort: boolean = true;
    public mobileno_sort: boolean = true;
    public country_sort: boolean = true;

    //Pagination
    public page: number = 0;
    public count: number = 0;
    public pagesize: number = 3;
    public noOfPages: number = 0;
    public pages: any;


    public model:PersonRequest = new PersonRequest(0, "", this.page, this.pagesize, "", "", "");
   
    constructor(public mainService: MainService,
        public route: ActivatedRoute,
        public router: Router
        , config: NgbPaginationConfig) {
        var model = new PersonRequest(0, "", this.page, this.pagesize, "FirstName_desc", "","");
       
       
       this.mainService.getAllPersons(model).subscribe((data: any) => {
                                                           this.bindPersons(data)
                                                       });
       config.size = 'sm';
       config.boundaryLinks = true;
    }

    getOrder(order:string,name:string,sort:any) {
        var model = new PersonRequest(0, "", 0, this.pagesize, order, "", "");
        model.sortOrder = order;

        if (name == "firstname_sort") {
            this.firstname_sort = !sort;
        } else if (name == "lastName_sort") {
            this.lastName_sort = !sort;
        } else if (name == "address_sort") {
            this.address_sort = !sort;
        }else if (name == "mobileno_sort") {
            this.mobileno_sort = !sort;
        }else {
            this.country_sort = !sort;
        }
        this.getPersonData(model);
        
    }
    //NgbPaginationConfig() {

    //}
    //Pagination
    paginationConfig(page: number) {
        this.model.skipCount = page;
        this.getPersonData(this.model);
        
    }
    getPersonData(model:any) {
        this.mainService.getAllPersons(model).subscribe((data: any) => {
            this.bindPersons(data)
        });
    }
    //numberOfPages(){
    //    return Math.ceil(this.count/ this.pagesize);
    //}

    ngOnInit(): void {
        this.mainService.getCounties().flatMap(result => {
            return this.mainService.getCounties();
        }).subscribe((data: any) => {
            this.bindCountry(data)
        });
    }

    OnCountryChange(value: any) {
        this.mainService.getCounties().flatMap(result => {
            return this.mainService.getCounties();
        }).subscribe((data: any) => {
            this.bindCountry(data);
        });
    }

    OnCountryDDChange(value: any) {
        debugger;
    }

    bindCountry: any = (data: any): void => {
        this.countries = data;
        this.googleGeoCode = data;
        this.noOfPages = Math.ceil(this.count / this.pagesize);
        this.pages = Array(this.noOfPages).fill(1);
        debugger;
    }

    bindPersons: any = (data: any): void => {
        this.persons = data.person;
        this.count = data.count;
    }
    
    //person.showRow = false;
    showRole(person: any) {
        this.name=person.Id
        person.showRow = !person.showRow;
        var element = document.getElementsByClassName('sub_' + person.Id)[0].getAttribute("style");
        if (element != null) {
            document.getElementsByClassName('sub_' + person.Id)[0].removeAttribute('style');
        } else {
            document.getElementById('sub_' + person.Id).style.display = "none";
        }
       
    }
    pageChanged(event: any) {
        var pageno = event.target.innerHTML - 1;
        var model = new PersonRequest(0, "", pageno, this.pagesize, "FirstName_desc", "", "");
       
        this.mainService.getAllPersons(model).
            subscribe((data: any) => {
                this.bindPersons(data)
            })
    }

    getParentByTagName(node: any, tagname: string) {
        var parent: any;
        if (node === null || tagname === '') return;
        parent = node.parentNode;
        tagname = tagname.toUpperCase();

        while (parent.tagName !== "HTML") {
            if (parent.tagName === tagname) {
                return parent;
            }
            parent = parent.parentNode;
        }

        return parent;
    }

    rowBound(person: any) {
        return false;
    }
   // filter(name: string): string {
       // return this.countries.filter(c => new RegExp(name, 'gi').test(data));
   // }
    editPerson(Id: number,type:string, person: any) {
        if (Id > 0 && type=="edit") {
            var element = document.getElementsByClassName('editRow_' + Id)
            var count = element.length;
            for (var i = 0; i < count; i++) {
                element[i].classList.remove("hideRow")
            }
            var hideElement = document.getElementsByClassName('showRow_' + Id)
            var count = hideElement.length;
            for (var i = 0; i < count; i++) {
                hideElement[i].classList.add("hideRow")
            }
        }
        else if (person != undefined && type=="updated") {
            var element = document.getElementsByClassName('showRow_' + Id)
            var count = element.length;
            for (var i = 0; i < count; i++) {
                element[i].classList.remove("hideRow")
            }
            var hideElement = document.getElementsByClassName('editRow_' + Id)
            var count = hideElement.length;
            for (var i = 0; i < count; i++) {
                hideElement[i].classList.add("hideRow")
            }
           
        }
       
    }
    editPerson1(person: any) {
         this.route.params
            .switchMap((params: Params) => {
                return person.Id;
            });
        this.id = person.Id;
        this.router.navigate(["/Overview/Edit",person.Id], { relativeTo: this.route });
    }
    OneditPerson(person: any) {
        this.data = person;
        this.showEdit = true;
    }
    deletePerson(person: any) {
        this.route.params
            .switchMap((params: Params) => {
                return person.Id;
            }).subscribe(prsn => prsn = person);;
        this.id = person.Id;
        this.router.navigate(["/Overview/Delete",person.Id], { relativeTo: this.route });
    }
    getPersons(row: string) {
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
    }
    
    //ngOnInit() {
    //    this._mainService.getAsOfDates()
    //        .subscribe(responseData => this.offering_dashboard_data = responseData);
    //}
}