import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsCart: any[] = [];

  constructor() { }

  addToCart(product: any) {
    product.cantidad = 1;
    this.itemsCart.push(product);
    localStorage.setItem("bolsaDeFavoritos", JSON.stringify(this.itemsCart));
  }

  deleteItem(product: any) {
    const index = this.itemsCart.indexOf(product);
    if (index !== -1) {
      this.itemsCart.splice(index, 1);
      localStorage.setItem("bolsaDeFavoritos", JSON.stringify(this.itemsCart));
    }
  }

  getItems() {
    if (localStorage.getItem("bolsaDeFavoritos") === null) {
      return this.itemsCart;
    }
    else {
      this.itemsCart = JSON.parse(localStorage.getItem("bolsaDeFavoritos")!);
    }
    return this.itemsCart;
  }

}
