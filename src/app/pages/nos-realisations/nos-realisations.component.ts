import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nos-realisations',
  standalone: true,       // Composant standalone
  imports: [CommonModule], // Importe CommonModule pour *ngFor, *ngIf...
  templateUrl: './nos-realisations.component.html',
  styleUrls: ['./nos-realisations.component.css']
})
export class NosRealisationsComponent {
  realisations = [
    { description: 'Construction d’écoles dans les zones rurales.', image: 'image1.jpg' },
    { description: 'Campagne de vaccination pour les enfants.', image: 'sante.jpg' },
    { description: 'Installation de puits dans les villages isolés.', image: 'eau.jpg' },
    { description: 'Formation des agriculteurs aux techniques bio.', image: 'agriculture.jpg' },
    { description: 'Aide financière aux petites entreprises locales.', image: 'microcredit.jpg' },
    { description: 'Mise en place de panneaux solaires communautaires.', image: 'energies.jpg' },
    { description: 'Construction de logements abordables.', image: 'logement.jpg' },
    { description: 'Ateliers sur la protection de la nature.', image: 'environnement.jpg' },
    { description: 'Formation pour l’emploi des jeunes.', image: 'insertion.jpg' },
    { description: 'Organisation d’événements culturels locaux.', image: 'culture.jpg' },
    { description: 'Création de clubs sportifs communautaires.', image: 'sport.jpg' },
    { description: 'Accès à l’informatique pour les zones reculées.', image: 'technologie.jpg' }
  ];
}
