import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Cart } from '../models/cart';
import { cartitem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cart:Cart = new Cart();

  constructor() { }

  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new cartitem(food));
  }
  
  removeFromCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
