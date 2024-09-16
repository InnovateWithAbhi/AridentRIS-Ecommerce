import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() product: any;

  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      imageUrl: 'path/to/image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      imageUrl: 'path/to/image2.jpg',
    },
    // Add more products as needed
  ];
}
