import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-association-varatraza',
  standalone: true,
  imports: [CommonModule], // 👈 ajoute ceci
  templateUrl: './association-varatraza.component.html',
  styleUrls: ['./association-varatraza.component.css']
})
export class AssociationVaratrazaComponent {
  membres = [
    { nom: 'LEBIRIA Rufin Tolojara', role: 'Vice-président', photo: 'assets/rufin.jpg' },
    { nom: 'NDRAMANORO Haritraina François', role: 'Secrétaire Général Administratif', photo: 'assets/general.jpg' },
    { nom: 'DE GIRARD Martine Marie', role: 'Conseiller', photo: 'assets/martine.jpg' },
    { nom: 'HOUSSEN Victor', role: 'Trésorier', photo: 'assets/hussen.jpg' }
  ];
}
