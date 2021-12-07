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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    SearchtestingComponent,



  ],
  imports: [
    BrowserModule,
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
