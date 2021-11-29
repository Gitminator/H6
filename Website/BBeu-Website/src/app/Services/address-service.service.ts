import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  constructor(private http: HttpClient) { }

  getRooms(){
    let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/room';

    return this.http.get<any>(url);
  }
}
