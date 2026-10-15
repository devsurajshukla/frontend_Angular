
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
  services = [
    {
      name: 'Suit Stitching',
      desc: 'Salwar Suit | Anarkali | Straight Suit',
      icon: '✿',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500'
    },
    {
      name: 'Saree Blouse',
      desc: 'Stylish | Comfortable | Perfect Fit',
      icon: '♡',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500'
    },
    {
      name: 'Lehenga Stitching',
      desc: 'Bridal | Party Wear | Custom Design',
      icon: '♧',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e9?w=500'
    },
    {
      name: 'Kurti Stitching',
      desc: 'Casual | Office Wear | Designer',
      icon: '✧',
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500'
    },
    {
      name: 'Alterations',
      desc: 'Shortening | Fitting | Repairs',
      icon: '✂',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500'
    },
    {
      name: 'Custom Designs',
      desc: 'As per your style and choice',
      icon: '❀',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500'
    }
  ];

  gallery = [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400',
    'https://images.unsplash.com/photo-1583391733956-6c78276477e9?w=400',
    'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
    'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400'
  ];

  reviews = [
    {
      name: 'Priya Sharma',
      city: 'Lucknow',
      text: 'The stitching quality is excellent and the fit is perfect. I am really happy with the service.'
    },
    {
      name: 'Neha Verma',
      city: 'Lucknow',
      text: 'Very professional and friendly service. They understood my requirements and delivered on time.'
    },
    {
      name: 'Ritika Singh',
      city: 'Kanpur',
      text: 'Beautiful designs and great finishing. I highly recommend this boutique!'
    }
  ];

  appointment(): void {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
