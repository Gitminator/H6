import { Component, OnInit } from '@angular/core';
import {LocationServiceService} from "../../Services/location-service.service";
import {Location} from "../../Objects/location";

@Component({
  selector: 'app-searchtesting',
  templateUrl: './searchtesting.component.html',
  styleUrls: ['./searchtesting.component.css']
})
export class SearchtestingComponent implements OnInit {
  locations: Location[] = [];
  // location!: Location;
  parsedJson: any;
  errorMessage!: string;
  products  = [];

  constructor(private locationServiceService: LocationServiceService) {

  }

  ngOnInit(): void {
    // this.getLocations();
    this.locationServiceService.sendGetRequest().subscribe((data: any)=>{
      console.log(data[0]);
      this.locations = data;
      console.log(this.locations);
    })
  }
  getLocations()
  {
    console.log(this.locationServiceService.getLocations());


    // this.Locations = this.locationServiceService.getLocations().subscribe(
    //   x => {
    //     this.Locations = x
    //   },
    //   error => {
    //     this.errorMessage = error;
    //   }
    // );


  //   this.locationServiceService.getLocations().subscribe(
  //     value =>{
  //       this.parsedJson = JSON.parse(value)
  //       this.serializeLocation(this.parsedJson)
  //     }
  //   )
  }
  // serializeLocation(json: any){
  //   this.location = new Location(json.Postalcode,json.City);
  //   this.Locations.push(this.location) ;
  //
  // }

}
