import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsCart = this.cartService.getItems();

  listOfProducts = [
    {
      id: 1,
      name: "Ropa Hello Kitty",
      image: "../../../assets/images/ropa1.jpeg",
      price: 18
    },
    {
      id: 2,
      name: "Pelota Soga Nudo Grande Colores",
      image: "../../../assets/images/juguete1.png",
      price: 14
    },
    {
      id: 3,
      name: "Pack Yogy Helado para perros 100% Natural",
      image: "../../../assets/images/alimento1.webp",
      price: 24
    },
    {
      id: 4,
      name: "Dingo Dental Mini Bones 7und x70gr",
      image: "../../../assets/images/alimento2.webp",
      price: 26
    },
    {
      id: 5,
      name: "Hartz - Duraplay Ball Medium",
      image: "../../../assets/images/juguete3.webp",
      price: 35
    },
    {
      id: 6,
      name: "Ropa Avengers",
      image: "../../../assets/images/ropa2.jpeg",
      price: 21
    },
    {
      id: 7,
      name: "Animal Planet Juguete P/Mascota Medium",
      image: "../../../assets/images/juguete2.webp",
      price: 29
    },
    {
      id: 8,
      name: "Hoodie Hotdogz Mr. Charlie",
      image: "../../../assets/images/ropa3.webp",
      price: 90
    },
    {
      id: 9,
      name: "Hills PD Metabolic Treats",
      image: "../../../assets/images/alimento3.webp",
      price: 45
    },
    {
      id: 10,
      name: "Ricocan Cordero Y Cereales Adultos",
      image: "../../../assets/images/alimento4.jpg",
      price: 81
    },
  ];

  constructor(
    private router: Router,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    if (this.itemsCart.length === 0) {
      this.cartService.addToCart(product);
    } else {
      if (!this.itemsCart.find((item: any) => item.id === product.id)) {
        this.cartService.addToCart(product);
      }
    }
  }




}
