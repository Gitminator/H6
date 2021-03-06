import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of,BehaviorSubject} from 'rxjs';
import {Room} from 'src/app/Objects/Room';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  items: [] = [];
  private readonly URL = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/room';
  dataobs$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  rooms!: Observable<Room[]>;
  ifdataobs$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {

  }
  getRooms(): Observable<Room[]>{
    let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/room';
    this.http.get<Room[]>(url).subscribe(x => {
      this.dataobs$.next(x)})
    return this.http.get<Room[]>(url);

  }


  getRooms2(): Observable<Room[]>{


    let url = 'http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/room';
    return this.http.get<Room[]>(url);

    // this.getRoomsObs();
    // return this.http.get<Room[]>(this.URL)




      // .pipe(
      //   tap(_ => this.log('fetched Rooms')),
      //   catchError(this.handleError<Room[]>('getRooms2', []))
      // );

    // create a method named: resolveItems()
    // this method returns list-of-items in form of Observable


  }

  getRoomsObs() {

    console.log("starting call");
    let data = new Room("",4);
    this.http.get<Room>("http://localhost:8080/BBeu-Backend-1.0-SNAPSHOT/api/room").forEach(x => { data = x});
    // this.dataobs$.next(data);

  }


    // .pipe(
    //   tap(_ => this.log('fetched Rooms')),
    //   catchError(this.handleError<Room[]>('getRooms2', []))
    // );

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(s: string) {
    console.log("ERROR" + s);
  }
}
