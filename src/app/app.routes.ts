import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AssociationVaratrazaComponent } from './pages/association-varatraza/association-varatraza.component';
import { NosRealisationsComponent } from './pages/nos-realisations/nos-realisations.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'association-varatraza', component: AssociationVaratrazaComponent },
  { path: 'nos-realisations', component: NosRealisationsComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
