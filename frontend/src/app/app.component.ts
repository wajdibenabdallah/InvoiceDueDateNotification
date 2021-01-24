import { Bill } from './shared/model/bill';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

const ELEMENT_DATA: Bill[] = [{ id: 1, customer: 'Wajdi', description: 'something', price: 15.3, dueDate: moment().add(1, 'm') }];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'customer', 'description', 'price', 'dueDate'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
