import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';  // Importer ici

@Component({
  selector: 'app-root',
  standalone: true,  // Probablement déjà en standalone
  imports: [RouterOutlet, NavbarComponent],  // Ajouter NavbarComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-vitrine';
}
