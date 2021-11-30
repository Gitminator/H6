import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RoomServiceService} from "../../Services/room-service.service";
import {Room} from 'src/app/Objects/Room';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input()
  // items: Observable<any>;

  myControl = new FormControl();
  // items: [] = [];
  // room!: Room;
  rooms: Room[] = [];
  picker: any;
  testLabel: any;
  testdatoLabel: any;
  parsedJson: any;
  AddressLabel: any;



  constructor(private roomServiceService: RoomServiceService) {
    // this.result = roomServiceService.getRooms();
  }

  ngOnInit(): void {
    this.getRooms();
  }
  getRooms(): void
  {
    // this.roomServiceService.dataobs$.subscribe(x =>{
    //   if(x.Address.length <= 1){
    //     this.rooms[0] = x;
    //   }
    // })
    this.roomServiceService.getRooms2()
      .subscribe(rooms => this.rooms = rooms);
      for (let room in  this.rooms){
          console.log(this)
      }
  }

  serializeRoom(json: any){
    // this.room = new Room(json.address,json.price);
    // this.Rooms.push(this.room) ;

  }

  search(inputtest:string) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',inputtest);
  }

  datesearch(testdatoLabel:Date) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',testdatoLabel);
  }

  addressSearch(AddressLabel:string){
      console.log(AddressLabel);
  }
}
