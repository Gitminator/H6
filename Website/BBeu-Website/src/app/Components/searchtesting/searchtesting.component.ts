import { Component, OnInit } from '@angular/core';
import {LocationServiceService} from "../../Services/location-service.service";
import {Location} from "../../Objects/location";

@Component({
  selector: 'app-searchtesting',
  templateUrl: './searchtesting.component.html',
  styleUrls: ['./searchtesting.component.css']
})
export class SearchtestingComponent implements OnInit {
  Locations: Location[] = [];
  location!: Location;
  parsedJson: any;

  constructor(private locationServiceService: LocationServiceService) { }

  ngOnInit(): void {
    this.getLocations();
  }
  getLocations()
  {
    this.locationServiceService.getLocations().subscribe(
      value =>{
        this.parsedJson = JSON.parse(value)
        this.serializeLocation(this.parsedJson)
      }
    )
  }
  serializeLocation(json: any){
    this.location = new Location(json.postalCode,json.city);
    this.Locations.push(this.location) ;

  }

}
