import { Component } from "@angular/core"
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { MainService } from '../../Services/main.Service'
import { Person } from '../../models/PersonModel';
import { AppComponent } from'../../Overview/app.overview'

@Component({
    selector:"add-app",
    templateUrl: './app/Overview/delete/overview.delete.tpl.html'
})

export class AppOverviewDelete  {
  //  export class AppOverviewDelete extends AppComponent {
    public id: number;
    public firstName: string = "data";
    public person: Person=new Person();
    constructor(
        public mainService: MainService,
        public route: ActivatedRoute,
        public router: Router, config: NgbPaginationConfig
        ) 
    {
       // super(mainService, route, router, NgbPaginationConfig);
        
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });
       
        this.mainService.getPersonById(this.id)
            .subscribe((data: any) => {
            this.getperson(data);
        });
    }

    getperson: any = (data: any): void => {
        this.person = data;
        this.firstName = data.FirstName;
    }
    
}
