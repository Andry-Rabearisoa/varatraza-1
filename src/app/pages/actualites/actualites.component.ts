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
   description: `Une descente préliminaire s’est tenue à Antseza, au mois de juin, afin d’identifier le potentiel du bassin versant de Marololo. Cette mission a été diligentée par Varatraza, en collaboration avec des experts en hydrologie, avec pour objectif d’analyser les caractéristiques hydrologiques, topographiques et environnementales du bassin versant.`
  
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
