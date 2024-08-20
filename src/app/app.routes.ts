import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PolizaTriatlonComponent } from './components/poliza-triatlon/poliza-triatlon.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ptc', component: PolizaTriatlonComponent }
];
