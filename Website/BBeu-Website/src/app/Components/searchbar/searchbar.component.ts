import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RoomServiceService} from "../../Services/room-service.service";
import {LocationServiceService} from "../../Services/location-service.service";
import {Room} from 'src/app/Objects/Room';
import { Observable } from 'rxjs';
import {Tree} from "../../Objects/tree";



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
  parsedJson2: any;
  parsedJsons: any[] = [];
  trees: Array<Tree> = new Array<Tree>() ;

  AddressLabel: any;



  constructor(private roomServiceService: RoomServiceService) {
    // this.result = roomServiceService.getRooms();
    for (let i = 0; i < 3; i++) {
      this.trees.push(new Tree('jul' + i.toString()))

    }
  }

  ngOnInit(): void {

    // this.testingSerializeRoom();
  }
  // getRooms(): void
  // {
  //   this.roomServiceService.getRooms2()
  //     .subscribe(rooms => this.rooms = rooms);
  //     for (let room in  this.rooms){
  //        this.parsedJson = JSON.parse(room);
  //        console.log("Parsed json",this.parsedJson);
  //        this.parsedJson2 = JSON.stringify(this.parsedJson);
  //       console.log("Stringify json",this.parsedJson2);
  //
  //     }
  // }







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
