import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-organigramme-complet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organigramme-complet.component.html',
  styleUrls: ['./organigramme-complet.component.css']
})
export class OrganigrammeCompletComponent {

  // Tous les membres, incluant Présidente, Vice-Président et les autres membres
  membres = [
    { nom: 'Madame KALOPER BUENO Beby', role: 'Présidente', photo: 'assets/pr.jpg' },
    { nom: 'Monsieur LEBIRIA Rufin Tolojara', role: 'Vice-Président', photo: 'assets/rufin.jpg' },
    { nom: 'Monsieur NDRAMANORO Haritraina François', role: 'Secrétaire Général Administratif', photo: 'assets/general.jpg' },
    { nom: 'Madame DE GIRARD Martine Marie', role: 'Conseillère', photo: 'assets/martine.jpg' },
    { nom: 'Monsieur HOUSSEN Victor', role: 'Trésorier', photo: 'assets/hussen.jpg' },
    { nom: 'Monsieur Andry Rabearisoa', role: 'Community managers', photo: 'assets/Andry.jpg' }
  ];
  

}
