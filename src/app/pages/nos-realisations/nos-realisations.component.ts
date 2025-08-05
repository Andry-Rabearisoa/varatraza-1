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
      description: `Nouvelle construction et réhabilitation des bâtiments du poste de la Gendarmerie de la Commune d’Ambarimaninga<br>Début des travaux : juin 2024<br>Achèvement : mars 2025<br>Coût des travaux : 14 000 000 ariary, soit 2 917 euros.`,
      image: 'image1.jpg'
    },
    {
      description: `Équipement d’éclairage public : distribution de plus de 200 lampadaires solaires au niveau des Fokontany dans le district de Mitsinjo.<br>Période : d’avril 2024 à mars 2025<br>Coût total des lampadaires distribués : 40 000 000 ariary, soit 8 333 euros.`,
      image: 'image2RE.jpg'
    },
    {
      description: `Réhabilitation et extension du lycée d’enseignement général de Mitsinjo, en partenariat avec la Fondation AXIAN.<br>Début des travaux : août 2024<br>Achèvement : octobre 2024<br>Inauguration : novembre 2024<br>Coût des travaux : 650 000 ariary, soit 135 417 euros.`,
      image: 'image3RE.jpg'
    },
    {
      description: `Distribution de matériels, d’effets et d’équipements sportifs aux jeunes auprès des Fokontany dans le district de Mitsinjo.<br>Période : de mars 2024 à décembre 2024<br>Coût : 15 000 000 ariary, soit 3 125 euros.`,
      image: 'image4RE.jpg'
    },

    {
      description: `Aide financière d’un montant de 3 500 000 ariary par fokontany dans le District de Mitsinjo.<br>Bénéficiaires : 58 Fokontany<br>Motifs : financement de diverses activités axées sur le développement au sein des fokontany.<br>Coût de l’aide en totalité : 28 000 000 ariary, soit 5 600 euros.`,
      image: '1753430901216.jpg'
    },
    {
      description: `Don de pirogues métalliques pour soutenir les communautés de Mitsinjo<br>
      En novembre 2024, l’Association Varatraza, en collaboration avec le Député du district de Mitsinjo, a offert deux pirogues métalliques aux communautés locales. Cette initiative vise à renforcer l’accès aux voies navigables, faciliter les déplacements et soutenir les activités économiques des populations riveraines, contribuant ainsi au développement durable de Mitsinjo.<br>
      Bénéficiaires : Les fokontany de Bemahazaka et la commune rurale de Bekipay.<br>
      Coût : 14 000 000 ariary, équivalent à 2 917 euros.`,
        image: 'E36ABD53.png'
    },
    {
      description: `Dons alimentaires pour les communes de Namakia, Mitsinjo et Katsepy en mars 2025.<br>Montant total des dons : 100 000 000 ariary, soit 20 833 euros.`,
      image: 'voria.jpg'
    },
    {
      description: `Construction de dix puits pour améliorer l’accès à l’eau potable à Mitsinjo<br>
      En collaboration avec les autorités locales et les élus du district de Mitsinjo, un projet de construction de dix puits a été lancé pour répondre aux besoins en eau potable des communautés locales.<br>
      Bénéficiaires : Les fokontany d’Anonibe, Namakia, Antanambao, Androtra, Ambararata, Ambarimaninga, Mahaditra, Antseza, Androhibe et un dixième fokontany à confirmer.<br>
      Coût total : 50 000 000 ariary, soit environ 7 000 euros.`,
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
