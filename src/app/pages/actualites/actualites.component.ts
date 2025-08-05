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

  realisations: any[] = [
    {

      video: '11.mp4',
      titre:'Formation à la fabrication de serviettes hygiéniques réutilisables dans le district de Mitsinjo',
      description: `L’association Varatraza met en œuvre une initiative pour lutter contre la précarité menstruelle.`
     
    }
    ,
    {

      image: 'image2actu.jpg',
      titre:'Descente préalable à Ambararatabe pour l’étude des variantes de construction d’un pont',
      description: `Une mission a été menée par l’association Varatraza et ses équipes, en présence des autorités locales, dont le maire de la commune d’Antseza et le président du fokontany d’Ambararatabe, avec pour objectif d’évaluer les conditions techniques et environnementales du site afin de dégager la solution la plus adaptée.`
   
    }
    ,
    {
   image: '1753431582193.jpg',
   titre:'Périmètre irrigué d’Antseza',
   description: `En juin 2025, une mission préliminaire a été menée à Antseza, dans le district de Mitsinjo, pour évaluer le potentiel du bassin versant de Marololo. Pilotée par l’Association Varatraza en collaboration avec des experts en hydrologie, cette initiative a visé à analyser les caractéristiques hydrologiques, topographiques et environnementales du site. Cette étude constitue une étape clé pour identifier des solutions durables de gestion de l’eau, renforcer les infrastructures hydrauliques et soutenir le développement socio-économique des communautés locales, tout en préservant l’écosystème unique de Mitsinjo.`
  
    },
    {
      image: 'actu5.jpg',
      titre:'Soutien aux travaux HIMO à Antseza : don de ciment pour la construction de batardeaux',
      description: `Dans le cadre de travaux préliminaires de type HIMO (Haute Intensité de Main-d’Œuvre), la commune d’Antseza, dans le district de Mitsinjo, a organisé des activités de terrassement et de curage pour soutenir les infrastructures locales. L’Association Varatraza a contribué à cette initiative par un don de 200 sacs de ciment, permettant la construction de batardeaux en sacs de terre. Ce projet, mobilisant la main-d’œuvre locale, vise à renforcer les infrastructures hydrauliques, à améliorer la gestion des ressources en eau et à soutenir le développement socio-économique d’Antseza, tout en consolidant l’engagement communautaire.
      Coût total du don : 300 000 ariary pour l’acquisition des 200 sacs de ciment.
      `
     
       }
    
    
  ];


 


  projetEnVue : any[] =  [ {
    description: `- Finition des infrastructures de la Police Nationale (Commissariat Mitsinjo)<br>
    - Formation et fabrication de serviette hygiénique réutilisable<br>
    - Réhabilitation et ouverture du tribunal de Mitsinjo<br>
    - Construction du lycée technique de Mitsinjo<br>
    - Construction Epp dans le Fokontany d'Amptisopitsoka<br>
    - Construction des routes : Katsepy-Mitsinjo<br>
    - Construction des routes inter-communales<br>
    - Vedettes ambulances`
  }
];



// Variables modal
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
