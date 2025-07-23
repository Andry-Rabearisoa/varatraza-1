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
      description: `Construction d’un poste avancé de la Gendarmerie Nationale pour la Commune d’Ambarimaninga. Date 
    de début des travaux juin 2024, avec un coût total de 
    14 000 000 Ar. Et les travaux sont achevés en mois de mars 
    2025.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Equipement d’Éclairage public dont 200 lampes 
    solaire aux fokontany du district de Mitsino depuis le 
    mois d’avril 2024 au mois de Mars 2025 d’un montant 
    total de 40 000 000 Ar.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `RÉHABILITATION et extension du lycée d’enseignement général de Mitsinjo partenariat avec le Fondation Axian. Dont les travaux ont débuté en Août 2024, qui seront achevés en mois d’octobre 2025 et l’inauguration a et prévue en novembre 2025 avec un coût total de 650 000 000 Ar.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: "Distribution des matériels, effets et équipements sportifs dans le district de Mitsinjo en mars 2024 jusqu’au décembre 2025 avec un coût total de 15 000 000 Ar en effets et équipements de sport distribue.",
      image: 'image1.jpg'
    }
    ,
    {
      description: `Instauration d’un nouveau centre d’examen pour l’examen baccalauréat entamé depuis juillet 2024 qui a un coût total de 400 000 Ar.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Dons salaire mensuel du député pour financer les activités des 58 fokontany bénéficiaires 
    dans le District de Mitsinjo durant les périodes de 
    juillet 2024 au mois de janvier 2025 dont le montant 
    total est de 24 500 000 Ar (3 500 000 Ar par Fokontany) : Namakia, Mitsinjo, Antongomena Bevary, 
    Belalanda, Bemahazaka, Bekipay, Sankoany.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Don Lakam-by (pirogue en tôle) la livraison prévue en novembre 2025 d’un montant 
    total de 7 000 000 Ar.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Dons alimentaires pour les communes : Mitsinjo, 
    Namakia et Katsepy durant la période d’octobre 2024 
    au mois de mars 2025 montants total des dons est de 
    100 000 000 Ar.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Adduction d’eau potable via la construction des 
    puits dans les fokontany Anonibe, Namakia, Antanam-
    bao, Androtra, Ambararata, Ambarimaninga, Mahaditra, 
    Antseza. Et le montant total de tous les travaux est de 
    35 000 000 Ar.`,
      image: 'image1.jpg'
    }
    ,
    {
      description: `Régularisation statu l’association Varatraza 
    œuvrant pour le développement du District de Mitsinjo 
    suivant RECEPISSE N°686/24-MI/DIRAT/MGA/SAGT/ASS 
    du 20 Novembre 2024 qui et le montant déboursé par 
    l’association est de 200 000 Ar.`,
      image: 'image1.jpg'
    }
  
  ];
}
