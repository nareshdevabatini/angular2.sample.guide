import { Component, Output, Input, OnChanges, SimpleChange } from "@angular/core"
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


import { MainService } from '../../Services/main.Service'
import { Person } from '../../models/PersonModel';
import { AppComponent } from'../../Overview/app.overview'

@Component({
    selector:"edit-app",
    //template:'<input type="text" (ngModel)="person.FirstName" />'
    templateUrl: './app/Overview/edit/overview.edit.tpl.html'
    //template:"{{person.Id}}"
})

export class AppOverviewEdit{
//export class AppOverviewEdit extends AppComponent {
    public id: number;
    @Input() name: string;
    @Input() countries: any;
    @Input() data: any;
    //public firstName: string = this.working; // extends properties
    //public ICountries: any = this.countries; // extends properties
    public person: Person=new Person();
    constructor(
        
        public mainService: MainService,
        public route: ActivatedRoute,
        public router: Router
        , config: NgbPaginationConfig
        ) 
    {
        //super(mainService, route, router, config); // extends properties
        
    }

    ngOnInit() {
        //this.route.params.subscribe(params => {
        //    this.id = +params['id']; // (+) converts string 'id' to a number
        //});
       
        //this.mainService.getPersonById(this.id)
        //    .subscribe((data: any) => {
        //    this.getperson(data);
        //});
        this.getperson(this.data);
    }

    getperson: any = (data: any): void => {
        this.person = data;
        //this.firstName = data.FirstName;
    }
    public internalVal:any = null;

   
    openDirective() {
        console.log("custom directives")
    }
}
