
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  categories = [
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300' },
    { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300' },
    { name: 'Gold Jewellery', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=300' },
    { name: 'Wedding Collection', image: 'https://images.unsplash.com/photo-1599459183200-59c7687a0276?w=300' }
  ];

  products = [
    {
      name: 'Diamond Solitaire Ring',
      price: 49999,
      oldPrice: 69999,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500'
    },
    {
      name: 'Traditional Gold Earrings',
      price: 18999,
      oldPrice: 24999,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500'
    },
    {
      name: 'Pearl Gold Necklace',
      price: 12999,
      oldPrice: 17999,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500'
    },
    {
      name: 'Elegant Gold Bracelet',
      price: 22999,
      oldPrice: 29999,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500'
    }
  ];

  cartCount = 0;
  wishlist: string[] = [];

  addToCart(): void {
    this.cartCount++;
  }

  toggleWishlist(name: string): void {
    if (this.wishlist.includes(name)) {
      this.wishlist = this.wishlist.filter(item => item !== name);
    } else {
      this.wishlist = [...this.wishlist, name];
    }
  }
}
