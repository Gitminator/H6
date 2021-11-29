import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AddressServiceService} from "../../Services/address-service.service";
import {Room} from 'src/app/Objects/Room';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  myControl = new FormControl();
  room!: Room;
  Rooms: Room[] = [];
  picker: any;
  testLabel: any;
  // inputtest: any;
  // intputtest: string = "test";
  testdatoLabel: any;
  parsedJson: any;



  constructor(private addressServiceService: AddressServiceService) { }

  ngOnInit(): void {
    this.getRooms();
  }
  getRooms()
  {
    this.addressServiceService.getRooms().subscribe(
      value =>{
          this.parsedJson = JSON.parse(value)
          this.serializeRoom(this.parsedJson)
      }
    )
  }

  serializeRoom(json: any){
    this.room = new Room(json.address,json.price);
    this.Rooms.push(this.room) ;

  }

  search(inputtest:string) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',inputtest);
  }

  datesearch(testdatoLabel:Date) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',testdatoLabel);
  }
}
