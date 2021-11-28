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
  // inputtest: any;
  // intputtest: string = "test";
  testdatoLabel: any;



  constructor() { }

  ngOnInit(): void {
  }

  search(inputtest:string) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',inputtest);
  }

  datesearch(testdatoLabel:Date) {
    // this.testLabel.setValue = inputtest.toString();
    console.log('it does nothing',testdatoLabel);
  }
}
