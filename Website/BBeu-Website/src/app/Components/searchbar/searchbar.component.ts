import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RoomServiceService} from "../../Services/room-service.service";
import {LocationServiceService} from "../../Services/location-service.service";
import {Room} from 'src/app/Objects/Room';
import { Observable } from 'rxjs';
import {Tree} from "../../Objects/tree";
import {Location} from "../../Objects/location";



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input()
  // items: Observable<any>;
  locations: Array<Location> = new Array<Location>();
  location!: Location;
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
  searchText: any;



  constructor(private roomServiceService: RoomServiceService, private locationServiceService: LocationServiceService) {
    // this.result = roomServiceService.getRooms();
    this.getLocations();
  }

  ngOnInit(): void {

    // this.testingSerializeRoom();
  }

  getLocations()
  {
    this.locationServiceService.getLocations().subscribe((data: any)=>{

      data.map((response: Response) => {

        // @ts-ignore
        const ting = JSON.parse(response);

        this.location = new Location(ting.postalcode,ting.city);
        this.locations.push(this.location)
        console.log(this.locations);

      })

    })

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
