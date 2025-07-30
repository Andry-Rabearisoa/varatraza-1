import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  images: string[] = [];

  constructor() {
    this.images = Array.from({ length: 12 }, (_, i) => `assets/c${i + 1}.jpg`);
  }
}
