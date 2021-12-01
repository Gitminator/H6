import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  locations!: Observable<Location[]>;

  constructor(private http: HttpClient) {
    this.locations = new Observable<Location[]>();
  }

  getLocations(){

    // console.log("hej hej");

    // return this.http.get<any>(url);
    // this.locations = this.http
    //   .get<Location[]>(url);
    // console.log(this.locations);
      // .map(data => _.values(data))
      // .do(console.log);
  }
   public sendGetRequest(){
    let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/location';
    return this.http.get<Location>(url);
   }

}
