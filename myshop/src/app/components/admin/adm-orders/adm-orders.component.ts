import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-adm-orders',
  templateUrl: './adm-orders.component.html',
  styleUrls: ['./adm-orders.component.scss']
})
export class AdmOrdersComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.mainService.getOrders(this.mainService.ordersRequest);
  }

}
