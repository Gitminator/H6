import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {RoomServiceService} from "../../Services/room-service.service";
import {LocationServiceService} from "../../Services/location-service.service";
import {FormBuilder} from "@angular/forms";
import {Location} from "../../Objects/location";

@Component({
  selector: 'app-addres-postal-search',
  templateUrl: './addres-postal-search.component.html',
  styleUrls: ['./addres-postal-search.component.css']
})
export class AddresPostalSearchComponent implements OnInit {

  locations: Array<Location> = new Array<Location>();
  location!: Location;
  @Input() addressInput: any;
  @Output() addressOutput: Location = new EventEmitter<Location>();
  testoutput: any = "eheheheheh";


  constructor(private roomServiceService: RoomServiceService, private locationServiceService: LocationServiceService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getLocations()
  }

  addNewItem(value: Location) {
    this.addressOutput.emit(value);
  }

  getLocations()
  {
    this.locationServiceService.getLocations().subscribe((data: any)=>{

      data.map((response: Response) => {

        // @ts-ignore
        const ting = JSON.parse(response);

        this.location = new Location(ting.postalcode,ting.city);
        this.locations.push(this.location)
      })

    })

  }

}
