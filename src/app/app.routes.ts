import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HubPagesComponent } from './pages/hub-pages/hub-pages.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'hub',
    component: HubPagesComponent,
    children: [
      { path: '', component: HomeComponent },
      // { path: 'eventos', component: EventosComponent },
      // { path: 'eventos/actividades/:id', component: ActividadesComponent },
      // { path: 'eventos/asignarA/:id', component: AsignarActividadesComponent },
      // { path: 'eventos/actividades/:idEvento/:idRubro', component: ActividadesComponent },
      // { path: 'eventos/actividades-asignadas/:idEvento', component: ActividadesAsignadasComponent },
    ],
  },
];
