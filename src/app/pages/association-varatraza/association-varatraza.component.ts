import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // <-- import RouterModule

@Component({
  selector: 'app-association-varatraza',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- ajoute RouterModule ici
  templateUrl: './association-varatraza.component.html',
  styleUrls: ['./association-varatraza.component.css']
})
export class AssociationVaratrazaComponent implements AfterViewInit {
  membres = [
    { nom: 'Monsieur NDRAMANORO Haritraina François', role: 'Secrétaire Général Administratif', photo: 'assets/general.jpg' },
    { nom: 'Madame DE GIRARD Martine Marie', role: 'Conseillère', photo: 'assets/martine.jpg' },
    { nom: 'Monsieur HOUSSEN Victor', role: 'Trésorier', photo: 'assets/hussen.jpg' },
    { nom: 'Monsieur Andry Rabearisoa', role: 'Community managers', photo: 'assets/Andry.jpg' }
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
