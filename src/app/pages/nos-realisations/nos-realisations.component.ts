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
    {
      description: `Nouvelle construction et réhabilitation des bâtiments du poste de la Gendarmerie Nationale d’Ambarimaninga, débutées en juin 2024 et achevées en mars 2025, pour un coût total de 14 000 000 ariary, soit environ 3 100 euros.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Équipement d’éclairage public : distribution de plus de 200 lampadaires solaires au niveau des Fokontany dans le District de Mitsinjo, réalisée entre avril 2024 et mars 2025, pour un coût total de 40 000 000 ariary, soit environ 8 900 euros.`,
      image: 'image2RE.jpg'
    }
    ,
    {
      description: `Réhabilitation et extension du lycée d’enseignement général de Mitsinjo, réalisées en partenariat avec la Fondation AXIAN, débutées en août 2024, achevées en octobre 2024 et inaugurées en novembre 2024, pour un coût total de 650 000 000 ariary, soit environ 144 400 euros.`,
      image: 'image3RE.jpg'
    }
    ,
    {
      description: "Distribution des matériels, effets et équipements sportifs aux jeunes des Fokontany dans le District de Mitsinjo, réalisée de mars 2024 à décembre 2024, pour un coût total de 15 000 000 ariary, soit environ 3 300 euros.",
      image: 'image4RE.jpg'
    }
    ,
    {
      description: `Mise en place d’un nouveau centre à Mitsinjo pour les examens de Baccalauréat de l’enseignement technique en juillet 2024, pour un coût total de 850 000 ariary, soit environ 190 euros`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Aide financière d’un montant de 3 500 000 ariary par fokontany dans le District de Mitsinjo, bénéficiaires : 58 fokontany, pour le financement des diverses activités axées sur le développement, pour un coût total de 28 000 000 ariary, soit environ 5 600 euros.`,
      image: '1753430901216.jpg'
    }
    ,
    {
      description: `Dons en matériels de transport en novembre 2024 : deux pirogues métalliques, bénéficiaires Fokontany Bemahazaka et Commune rurale de Bekipay, pour un coût de 14 000 000 ariary, soit environ 3 100 euros.`,
      image: 'E36ABD53.png'
    }
    ,
    {
      description: `Dons alimentaires pour les communes de Namakia, Mitsinjo et Katsepy en mars 2025, pour un montant total de 100 000 000 ariary, soit environ 22 200 euros.`,
      image: 'voria.jpg'
    }
    ,
    {
      description: `Adduction d’eau potable via la construction de puits dans les Fokontany Anonibe, Namakia, Antanam-bao, Androtra, Ambararata, Ambarimaninga, Mahaditra, Antseza, et Androhibe. Le coût total des travaux est de 35 000 000 ariary, soit environ 7 000 euros.`,
      image: '1753430750970.jpg'
    }

  ];

  modalOpen = false;
  modalContent: any = null;

  openModal(item: any) {
    this.modalContent = item;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalContent = null;
  }
}
