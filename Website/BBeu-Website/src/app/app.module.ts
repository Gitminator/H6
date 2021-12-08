import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { Room } from './Objects/Room';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchtestingComponent } from './Components/searchtesting/searchtesting.component';
import {CommonModule} from '@angular/common';
import {FormBuilder, Validators} from "@angular/forms";
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AddresPostalSearchComponent } from './Components/addres-postal-search/addres-postal-search.component';
import { DateFromSearchComponent } from './Components/date-from-search/date-from-search.component';
import { DateToSearchComponent } from './Components/date-to-search/date-to-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    SearchtestingComponent,
    AddresPostalSearchComponent,
    DateFromSearchComponent,
    DateToSearchComponent,



  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    HttpClientModule,
    MatAutocompleteModule,
    CommonModule,
    MatSliderModule,
    MatChipsModule,
    MatIconModule

  ],
  providers: [FormBuilder, Validators],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

