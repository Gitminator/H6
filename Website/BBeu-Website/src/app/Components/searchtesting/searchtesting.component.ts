import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationServiceService} from "../../Services/location-service.service";
import {Location} from "../../Objects/location";

@Component({
  selector: 'app-searchtesting',
  templateUrl: './searchtesting.component.html',
  styleUrls: ['./searchtesting.component.css']
})
export class SearchtestingComponent implements OnInit {
  locations: Array<Location> = new Array<Location>();
  location!: Location;
  errorMessage!: string;
  products  = [];
  searchword: any;


  constructor(private locationServiceService: LocationServiceService) {
    this.getLocations();
  }

  ngOnInit(): void {
    //this.getLocations();

  }
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis() {
    this.searchcriteria.emit(this.searchword)
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
