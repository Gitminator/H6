import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  picker: any;
  testLabel: any;
  inputtest: any;



  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.testLabel =this.inputtest;
  }
}
