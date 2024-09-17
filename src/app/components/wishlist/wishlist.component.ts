import { NgFor, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = [];

  ngOnInit(): void {
    this.loadWishlist();
  }

  // Check if localStorage is available
  isLocalStorageAvailable(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }

  loadWishlist(): void {
    if (this.isLocalStorageAvailable()) {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    } else {
      // Handle cases where localStorage is not available (SSR or testing)
      this.wishlist = [];
    }
  }

  removeFromWishlist(product: any): void {
    if (this.isLocalStorageAvailable()) {
      this.wishlist = this.wishlist.filter((item) => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }
}
