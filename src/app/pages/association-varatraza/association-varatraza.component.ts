import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-association-varatraza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './association-varatraza.component.html',
  styleUrls: ['./association-varatraza.component.css']
})
export class AssociationVaratrazaComponent implements AfterViewInit {
  membres = [

    { nom: 'NDRAMANORO Haritraina François', role: 'Secrétaire Général Administratif', photo: 'assets/general.jpg' },
    { nom: 'DE GIRARD Martine Marie', role: 'Conseiller', photo: 'assets/martine.jpg' },
    { nom: 'HOUSSEN Victor', role: 'Trésorier', photo: 'assets/hussen.jpg' }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = this.el.nativeElement.querySelectorAll('.animate-left, .animate-right, .animate-fade');
    animatedElements.forEach((el: Element) => observer.observe(el));
  }
}
