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


   public getLocations(): Observable<Location[]>{
    let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/location';
    return this.http.get<Location[]>(url);
   }

}
