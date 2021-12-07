import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RoomServiceService} from "../../Services/room-service.service";
import {LocationServiceService} from "../../Services/location-service.service";
import {Room} from 'src/app/Objects/Room';
import { Observable } from 'rxjs';
import {Tree} from "../../Objects/tree";
import {Location} from "../../Objects/location";
import {FormBuilder, Validators} from "@angular/forms";
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    address: ['vejvej', Validators.required],
    dato: [new Date(), Validators.required]
  });

  @Input()
  // items: Observable<any>;
  locations: Array<Location> = new Array<Location>();
  location!: Location;
  myControl = new FormControl();
  // items: [] = [];
  // room!: Room;
  rooms: Room[] = [];
  picker: any;

  parsedJson2: any;
  parsedJsons: any[] = [];
  trees: Array<Tree> = new Array<Tree>() ;
  searchText: any;
  addressInput: any;
  // addressModel: any;
  testLabel: any;
  testLabel2: any;



  constructor(private roomServiceService: RoomServiceService, private locationServiceService: LocationServiceService,
              private fb: FormBuilder
  ) {
    // this.result = roomServiceService.getRooms();
    this.getLocations();
  }
  get testtitle(){
    return this.form.controls['title'];
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
      })

    })

  }

  search(inputtest:string) {
    this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',inputtest);
  }

  datesearch(testdatoLabel:Date) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',testdatoLabel);
  }

  addressSearch(addressInput: string){
    this.testLabel2.setValue= addressInput.toString();
      console.log(" works" + addressInput);
  }
}
