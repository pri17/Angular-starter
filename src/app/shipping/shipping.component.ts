import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html'
})

export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(private cartservice: CartService) { 
      this.shippingCosts = this.cartservice.getShippingPrices();
  }

  ngOnInit() {
  }

}