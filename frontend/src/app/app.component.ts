import { BillService } from './shared/service/bill.service';
import { Bill } from './shared/model/bill';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

const MOCK_DATA: Bill[] = [
  { id: 1, customer: 'Wajdi', description: 'something', price: 15.3, dueDate: moment().add(1, 'm') },
  { id: 2, customer: 'Yassine', description: 'something', price: 115.7, dueDate: moment().add(2, 'm') },
  { id: 3, customer: 'Salah', description: 'something', price: 125.3, dueDate: moment().add(3, 'm') },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'customer', 'description', 'price', 'dueDate'];
  dataSource = MOCK_DATA;

  constructor(private service: BillService) {}

  ngOnInit(): void {
    this.service.initMocks(MOCK_DATA).subscribe((data) => {
      console.log(data);
    });
  }
}
