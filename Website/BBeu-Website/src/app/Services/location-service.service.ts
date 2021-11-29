import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }

  getLocations(){
    let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/location';

    return this.http.get<any>(url);
  }
}
