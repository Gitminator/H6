import {Component, Input, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Location} from "./Objects/location";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BBeu-Website';
  // @Input() addressInput: any;
  locations: Array<Location> = new Array<Location>();
  serializedLocations: Array<Location> = new Array<Location>();

  testLabel2: any;
  addressInput: any = "hejmor";
  addressOutput: any;

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['Dansk', 'Deutsch', 'Svenska', 'Norsk', 'Suomalainen', 'en']);
    // translate.addLangs(['en', 'nl']);

    translate.setDefaultLang('Dansk');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  searchaddresspostal(addressOutput: any){

  }

  addItem(newItem: Location) {
    this.locations.push(newItem);
  }
}
