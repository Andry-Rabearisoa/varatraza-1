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
      description: ` Nouvelle construction et réhabilitation des bâtiments du poste de la Gendarmerie nationale d’Ambarimaninga : les travaux ont débuté en juin 2024 et s’achèveront en mars 2025. Le coût s’élève à 14 000 000 ariary, soit environ 2 800 euros.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: ` Équipement d’éclairage public : distribution de plus de 200 lampadaires solaires dans les Fokontany du district de Mitsinjo, de avril 2024 à mars 2025. Le montant total s’élève à 40 000 000 ariary, soit environ 8 000 euros.`,
      image: 'image2RE.jpg'
    }
    ,
    {
      description: `Réhabilitation et extension du lycée d’enseignement général de Mitsinjo, en partenariat avec la Fondation AXIAN : les travaux débuteront en août 2024 et s’achèveront en octobre 2024. L’inauguration est prévue en novembre 2024. Le coût des travaux s’élève à 650 000 000 ariary, soit environ 130 000 euros.`,
      image: 'image3RE.jpg'
    }
    ,
    {
      description: " Distribution de matériels, d’effets et d’équipements sportifs aux jeunes dans les Fokontany du district : réalisée de mars 2024 à décembre 2024. Le coût s’élève à 15 000 000 ariary, soit environ 3 000 euros",
      image: 'image4RE.jpg'
    }
    ,
    {
      description: ` Mise en place d’un nouveau centre à Mitsinjo pour l’examen du baccalauréat de l’enseignement technique, en juillet 2024. Les dépenses s’élèvent à 850 000 ariary, soit environ 170 euros.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Don d’un montant total de 3 500 000 ariary destiné aux 58 Fokontany du district de Mitsinjo pour financer leurs activités.
      Les Fokontany ayant déjà reçu leur part depuis juillet 2024 sont : Namakia, Mitsinjo, Antongomena Bevary, Belalanda, Bemahazaka, Bekipay et Sankoany.
      Montant déjà distribué : 28 000 000 ariary, soit environ 5 600 euros.`,
      image: '1753430901216.jpg'
    }
    ,
    {
      description: `Dons en matériels de transport en novembre 2024 : deux pirogues métalliques.
      Bénéficiaires : Fokontany Bemahazaka et commune rurale de Bekipay.
      Coût : 14 000 000 ariary, soit environ 2 800 euros.`,
      image: 'E36ABD53.png'
    }
    ,
    {
      description: `Dons alimentaires pour les communes de Namakia, Mitsinjo et Katsepy en mars 2025.
      Montant total des dons : 100 000 000 ariary, soit environ 20 000 euros.`,
      image: 'voria.jpg'
    }
    ,
    {
      description: `Adduction d’eau potable via la construction de puits dans les Fokontany Anonibe, Namakia, Antanam-bao, Androtra, Ambararata, Ambarimaninga, Mahaditra, Antseza, et Androhibe.
      Le montant total des travaux s’élève à 35 000 000 ariary, soit environ 7 000 euros.`,
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
