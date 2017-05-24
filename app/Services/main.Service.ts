import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import 'rxjs/rxjs'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PersonRequest } from '../models/personRequest.model';



@Injectable()
export class MainService {

    private _url: string = "api/persons/getAllbyRequest";
    private _urlId: string = "api/persons/getbyid";
    public persons: any;
    public personReq: any;
    constructor(private _http: Http) { }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
    private extractPersons(res: Response) {
        this.persons = res;
        let timeOutId = setTimeout(() => {
            debugger
            this.persons = null
            this.personReq = null;
        }, 20000)
        clearTimeout(timeOutId);
        let body = res.json();
        return body || {};
    }
    private extractPerson(res: Response) {
        let body = res.json();
        return body || {};
    }
    private extractLanguage(res: Response) {
        let body = res.json();
        return body.country || {};
    }
    getAllPersons(personRequest: PersonRequest): Observable<any> {
        //if (this.personReq == personRequest && (this.persons != undefined || this.persons != null)) {
       
            this.personReq = personRequest;
            this.persons = personRequest;
            let body = JSON.stringify(personRequest);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this._http.post(this._url, body, options)
                .map(this.extractPersons)
                .catch(this.handleError);
    }

    getCounties() {
        return this._http.get("api/persons/country/getAll")
            .map(this.extractLanguage)
            .catch(this.handleError);
    }
    getPersonById(id: number): Observable<any> {
        let body = JSON.stringify({id:id});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urlId + '/'+id, body, options).
            map(this.extractPerson).catch(this.handleError);
    }
    //getAsOfDates() {
    //    return this._http.get(this._url)
    //        .map(this.extractPersons)
    //        .catch(this.handleError);
    //}
   
}
