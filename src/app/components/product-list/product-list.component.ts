import { NgFor, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Latest model with high-end features.',
      price: 299,
      category: 'electronics',
      image: 'assets/images/smartphone.jpeg',
    },
    {
      id: 2,
      name: 'Sneakers',
      description: 'Comfortable and stylish sneakers.',
      price: 79,
      category: 'fashion',
      image: 'assets/images/sneakers.jpeg',
    },
    {
      id: 3,
      name: 'Coffee Maker',
      description: 'Brews your coffee to perfection.',
      price: 120,
      category: 'home',
      image: 'assets/images/coffee-maker.jpeg',
    },
    {
      id: 4,
      name: 'Cupboard',
      description: 'Store your cloths in wooden cupboard.',
      price: 100,
      category: 'home',
      image: 'assets/images/cupboard.jpeg',
    },
    {
      id: 5,
      name: 'Bluetooth Headphones',
      description: 'Wireless headphones with noise-cancellation.',
      price: 149,
      category: 'electronics',
      image: 'assets/images/bluetooth-headphones.jpeg',
    },
    {
      id: 6,
      name: 'Leather Jacket',
      description: 'Stylish leather jacket for all seasons.',
      price: 199,
      category: 'fashion',
      image: 'assets/images/leather-jacket.jpeg',
    },
    {
      id: 7,
      name: 'Table Lamp',
      description: 'Elegant table lamp with adjustable brightness.',
      price: 45,
      category: 'home',
      image: 'assets/images/table-lamp.jpeg',
    },
    {
      id: 8,
      name: 'Gaming Console',
      description: 'Latest gaming console with high performance.',
      price: 399,
      category: 'electronics',
      image: 'assets/images/gaming-console.jpeg',
    },
    {
      id: 9,
      name: 'Wristwatch',
      description: 'Classic wristwatch with leather strap.',
      price: 89,
      category: 'fashion',
      image: 'assets/images/wristwatch.jpeg',
    },
    {
      id: 10,
      name: 'Vacuum Cleaner',
      description: 'Powerful vacuum cleaner for home use.',
      price: 150,
      category: 'home',
      image: 'assets/images/vacuum-cleaner.jpeg',
    },
    // Add more products as needed
  ];

  filteredProducts = this.products;
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedPriceRange: string = '';

  ngOnInit(): void {
    this.filterProducts();
  }

  filterProducts(): void {
    let filtered = this.products;

    if (this.searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    if (this.selectedPriceRange) {
      const [min, max] = this.selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    this.filteredProducts = filtered;
  }

  addToCart(product: any): void {
    // Implement add to cart functionality using local storage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
