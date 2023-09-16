import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProduct: Product[] = [];
  sortOrder: string ="";


    constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProduct = data;
    });
  }

  addTocart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open('Product added to cart', '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProduct = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    this.sortProducts(this.sortOrder)
  }

  sortProducts(sortValues: string): void {
    this.sortOrder=sortValues;

    if(this.sortOrder==="PriceLowtoHigh"){
      this.products.sort((a,b)=>a.price-b.price);
    }
    else if(this.sortOrder==="PriceHightoLow"){
      this.products.sort((a,b)=>b.price-a.price);
    }

  }
}
