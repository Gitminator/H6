import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/room';
export class AddressServiceService {

  constructor(private http: HttpClient) { }

  getRooms(){

    return this.http.get<any>(url);
  }
}
