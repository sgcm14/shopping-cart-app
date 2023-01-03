import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  itemsCart = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  deleteItem(itemCart: any) {
    this.cartService.deleteItem(itemCart);
  }

}
