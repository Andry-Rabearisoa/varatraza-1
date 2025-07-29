import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  images: string[] = [];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  autoScrollInterval: any;

  constructor() {
    // Charge les images : c1.jpg à c12.jpg
    this.images = Array.from({ length: 12 }, (_, i) => `assets/c${i + 1}.jpg`);
  }

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval);
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.scrollRight();
    }, 3000); // toutes les 3 secondes
  }

  scrollLeft() {
    this.resetAutoScroll();
    const carouselEl = this.carousel.nativeElement;
    const scrollAmount = carouselEl.clientWidth / 4; // largeur 1 image (4 images visibles)
    carouselEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
    this.resetAutoScroll();
    const carouselEl = this.carousel.nativeElement;
    const scrollAmount = carouselEl.clientWidth / 4; // largeur 1 image
    carouselEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  resetAutoScroll() {
    clearInterval(this.autoScrollInterval);
    this.startAutoScroll();
  }
}
