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
      description: 'Stylish leather jackets for all weather and seasons.',
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
  ];

  filteredProducts = this.products;
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedPriceRange: string = '';
  wishlist: any[] = [];

  ngOnInit(): void {
    this.loadWishlist();
    this.filterProducts();
  }

  filterProducts(): void {
    let filtered = this.products;

    if (this.searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().startsWith(this.searchQuery.toLowerCase())
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
    if (this.isBrowser()) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  // Load wishlist from localStorage
  loadWishlist(): void {
    if (this.isBrowser()) {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    }
  }

  // Utility function to check if the code is running in the browser
  isBrowser(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }

  // Check if a product is in the wishlist
  isInWishlist(product: any): boolean {
    return this.wishlist.some((item) => item.id === product.id);
  }

  // Toggle wishlist status
  toggleWishlist(product: any): void {
    if (this.isBrowser()) {
      if (this.isInWishlist(product)) {
        this.wishlist = this.wishlist.filter((item) => item.id !== product.id);
      } else {
        this.wishlist.push(product);
      }
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }
}
