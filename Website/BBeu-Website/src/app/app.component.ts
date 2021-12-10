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

  ifroom: boolean = false;
  testLabel2: any;
  room!: Room;

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

    })

    translate.addLangs(['Dansk', 'Deutsch', 'Svenska', 'Norsk', 'Suomalainen']);
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
