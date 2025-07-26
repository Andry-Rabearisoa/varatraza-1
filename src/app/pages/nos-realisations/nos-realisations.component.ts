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
      description: `La nouvelle construction et la réhabilitation des bâtiments du poste de la Gendarmerie nationale d’Ambarimaninga ont été réalisées entre juin 2024 et mars 2025. Le coût total s’est élevé à 14 000 000 ariary, soit environ 2 800 euros.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Équipement d’éclairage public : plus de 200 lampadaires solaires ont été distribués dans les Fokontany du district de Mitsinjo, entre avril 2024 et mars 2025. Le montant total s’est élevé à 40 000 000 ariary, soit environ 8 000 euros.`,
      image: 'image2RE.jpg'
    }
    ,
    {
      description: `Réhabilitation et extension du lycée d’enseignement général de Mitsinjo, en partenariat avec la Fondation AXIAN : les travaux ont été réalisés entre août et octobre 2024. L’inauguration a eu lieu en novembre 2024. Le coût des travaux s’est élevé à 650 000 000 ariary, soit environ 130 000 euros.`,
      image: 'image3RE.jpg'
    }
    ,
    {
      description: "Distribution de matériels, d’effets et d’équipements sportifs aux jeunes dans les Fokontany du district : l’opération a été réalisée de mars à décembre 2024. Le coût total s’est élevé à 15 000 000 ariary, soit environ 3 000 euros.",
      image: 'image4RE.jpg'
    }
    ,
    {
      description: ` Mise en place d’un nouveau centre à Mitsinjo pour l’examen du baccalauréat de l’enseignement technique en juillet 2024. Les dépenses se sont élevées à 850 000 ariary, soit environ 170 euros.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Un don d’un montant total de 3 500 000 ariary a été attribué à chacun des 58 Fokontany du district de Mitsinjo pour financer leurs activités. Depuis juillet 2024, les Fokontany ayant déjà reçu leur part sont : Namakia, Mitsinjo, Antongomena Bevary, Belalanda, Bemahazaka, Bekipay et Sankoany.
      Le montant déjà distribué s’élève à 28 000 000 ariary, soit environ 5 600 euros.`,
      image: '1753430901216.jpg'
    }
    ,
    {
      description: `Dons de matériels de transport effectués en novembre 2024 : deux pirogues métalliques ont été remises au Fokontany de Bemahazaka et à la commune rurale de Bekipay.
      Le coût total s’est élevé à 14 000 000 ariary, soit environ 2 800 euros.`,
      image: 'E36ABD53.png'
    }
    ,
    {
      description: `Des dons alimentaires ont été distribués en mars 2025 aux communes de Namakia, Mitsinjo et Katsepy.
      Le montant total des dons s’est élevé à 100 000 000 ariary, soit environ 20 000 euros.`,
      image: 'voria.jpg'
    }
    ,
    {
      description: `L’adduction d’eau potable a été réalisée via la construction de puits dans les Fokontany Anonibe, Namakia, Antanam-bao, Androtra, Ambararata, Ambarimaninga, Mahaditra, Antseza et Androhibe.
      Le montant total des travaux s’est élevé à 35 000 000 ariary, soit environ 7 000 euros.`,
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
