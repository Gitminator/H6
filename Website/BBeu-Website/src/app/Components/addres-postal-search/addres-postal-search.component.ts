import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {RoomServiceService} from "../../Services/room-service.service";
import {LocationServiceService} from "../../Services/location-service.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {Location} from "../../Objects/location";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-addres-postal-search',
  templateUrl: './addres-postal-search.component.html',
  styleUrls: ['./addres-postal-search.component.css']
})
export class AddresPostalSearchComponent implements OnInit {
  myControl = new FormControl();
  locations: Location[] = [];
  location!: Location;
  filteredOptions!: Observable<Location[]> ;
  // @Input() addressInput: any;
  // @Output() addressOutput = new EventEmitter<Location>();
  // @Output() addressOutput:  EventEmitter<any>() = new EventEmitter();

  // @Output() addressOutput: EventEmitter<any> = new EventEmitter();



  constructor(private roomServiceService: RoomServiceService, private locationServiceService: LocationServiceService,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getLocations();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.City)),
      map(name => (name ? this._filter(name) : this.locations.slice())),
    );

  }

  private _filter(name: string): Location[] {
    const filterValue = name.toLowerCase();

    return this.locations.filter(loc => loc.City.toLowerCase().includes(filterValue));
  }

  // addNewItem(value: Location) {
  //   this.addressOutput.emit(value);
  // }


  getLocations()
  {
    this.locationServiceService.getLocations().subscribe((data: any)=>{

      data.map((response: Response) => {

        // @ts-ignore
        const ting = JSON.parse(response);
console.log(ting.postalcode);
        this.location = new Location(ting.postalcode,ting.city);
        this.locations.push(this.location)
      })

    })

  }

  Searchclick(input: any) {
    this.roomServiceService.getRooms()
    this.roomServiceService.ifdataobs$.next(true);
  }
}
