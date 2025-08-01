import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  onFaireUnDon(): void {
    // 👇 Tu peux ici ajouter un log, analytics, animation, etc.
    console.log('Bouton "Faire un don" cliqué');

    // Ouvrir le lien dans un nouvel onglet
    window.open('https://forms.gle/XG1KyFSECpKMPYzu6', '_blank');
  }
  onDevenirBenevole(): void {
    console.log('Bouton "Devenir bénévole" cliqué');
    window.open('https://forms.gle/AexZnHCxmN4G2CCZ9', '_blank');
  }
  
}
