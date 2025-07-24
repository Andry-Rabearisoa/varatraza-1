import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nos-realisations',
  standalone: true,       // Composant standalone
  imports: [CommonModule], // Importe CommonModule pour *ngFor, *ngIf...
  templateUrl: './actualites.component.html',
  styleUrl: './actualites.component.css'
})
export class ActualitesComponent {

  realisations = [
    {

      image: 'actu1.jpg',
      description: `Formation et fabrication de serviette hygiénique réutilisable
      Dans le district de Mitsinjo, à Madagascar, l'association Varatraza met en œuvre une initiative innovante pour lutter contre la précarité menstruelle en formant les femmes et les jeunes filles à la fabrication de serviettes hygiéniques réutilisables.`
     
    }
    ,
    {

      image: 'image2actu.jpg',
      description: `Dans le district de Mitsinjo, une descente sur le terrain a été organisée pour réaliser les études de variantes en vue de la reconstruction du pont d'Ambararatabe, un ouvrage essentiel pour la connectivité locale. Cette mission, menée par les autorités et des experts en génie civil, vise à évaluer les conditions du site, analyser les contraintes techniques et environnementales, et proposer des solutions adaptées pour un pont durable et sécurisé.`
   
    }
    ,
    {
   image: 'image2actu.jpg',
   description: `Dans la commune d'Antseza, une descente sur le terrain a été entreprise pour identifier le potentiel du bassin versant de Marololo, dans le cadre d’études préliminaires à la reconstruction du pont d’Ambararatabe. Cette mission, menée en collaboration avec des experts en hydrologie et des partenaires comme Varatraza, vise à analyser les caractéristiques hydrologiques, topographiques et environnementales du bassin versant.`
  
    }
    ,
    {
      description: `- Finition des infrastructures de la Police Nationale (Commissariat Mitsinjo)<br>
      - Formation et fabrication de serviette hygiénique réutilisable<br>
      - RÉHABILITATION et ouverture TRIBUNAL Mitsinjo<br>
      - Construction du lycée technique de Mitsinjo<br>
      - Construction Epp dans le Fokontany d'Amptisopitsoka<br>
      - Construction des routes : Katsepy-Mitsinjo<br>
      - Construction des routes inter-communales<br>
      - Vedettes ambulances`
  }
    

    
    
  ];


 











}
