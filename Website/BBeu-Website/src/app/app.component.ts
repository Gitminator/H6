import {Component, Input, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Location} from "./Objects/location";
import {RoomServiceService} from "./Services/room-service.service";
import {Room} from "./Objects/Room";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BBeu-Website';
  // @Input() addressInput: any;
  // locations: Array<Location> = new Array<Location>();
  // serializedLocations: Array<string> = new Array<string>();
  ifroom: boolean = false;
  testLabel2: any;
  addressInput: any = "hejmor";
  room!: Room;
  // rooms: Room[] = [];
  rooms: Room[] = new Array<Room>();

  constructor(
    public translate: TranslateService, private roomservice:RoomServiceService
  ) {
    this.roomservice.ifdataobs$.subscribe((x: any )=> {this.ifroom = x})
    this.roomservice.getRooms();
    this.roomservice.dataobs$.subscribe((x: any )=> {

      x.map((response: Response) => {

        // @ts-ignore
        const ting = JSON.parse(response);

        this.room = new Room(ting.address,ting.price);
        console.log(this.room.getaddress())
        this.rooms.push(this.room)

      })

      // if (x.length > 0){
      //   this.rooms.push(x[0]) ;
      //   console.log(JSON.parse(x[0].getaddress()));
      //
      // }

    })

    translate.addLangs(['Dansk', 'Deutsch', 'Svenska', 'Norsk', 'Suomalainen', 'en']);
    // translate.addLangs(['en', 'nl']);

    translate.setDefaultLang('Dansk');
  }



  switchLang(lang: string) {
    this.translate.use(lang);
  }

  searchaddresspostal(addressOutput: any){

  }

  // addItem(newItem: Location) {
  //   this.locations.push(newItem);
  // }
}
