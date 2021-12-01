import { Component, OnInit } from '@angular/core';
import {LocationServiceService} from "../../Services/location-service.service";
import {Location} from "../../Objects/location";

@Component({
  selector: 'app-searchtesting',
  templateUrl: './searchtesting.component.html',
  styleUrls: ['./searchtesting.component.css']
})
export class SearchtestingComponent implements OnInit {
  // locations: Location[] = [];
  locations: Array<Location> = new Array<Location>();
  location!: Location;
  parsedJson: any;
  errorMessage!: string;
  products  = [];
  private stringifiedData!: string;
  private apiResponse: Array<string> = new Array<string>();

  constructor(private locationServiceService: LocationServiceService) {
    this.getLocations();
  }

  ngOnInit(): void {
    //this.getLocations();

  }
  serializeLocation(json: any){
    this.location = new Location(json.Postalcode,json.City);
    this.locations.push(this.location) ;

  }

  getLocations()
  {
    this.locationServiceService.sendGetRequest().subscribe((data: any)=>{

      data.map((response: Response) => {

        // @ts-ignore
        const ting = JSON.parse(response);

        this.location = new Location(ting.postalcode,ting.city);
        this.locations.push(this.location)
        console.log(this.locations);

    })

  })

}
}
