import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/CartItem';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService,
    private foodService: FoodService, public router: Router) { //after design this page, i will remove it.



    this.setCart()
  }
  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();

  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  first: any;
  one() {
    this.first = 1;

  }
  king: any;
number = 3
  only = 3

}


