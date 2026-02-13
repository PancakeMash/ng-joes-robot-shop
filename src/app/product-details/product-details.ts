import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/catalog.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  
  @Input() product!: IProduct;

  getImageUrl(product: IProduct): string {
    if (!product) return '';

    return `/assets/images/robot-parts/${product.imageName}`;
  }

  addToCart(product: IProduct) {
    //
  }

}
