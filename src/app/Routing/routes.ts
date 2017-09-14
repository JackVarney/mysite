import { Routes } from '@angular/router';
import { homeComponent } from 'app/components/_home/home.module';
import { infoComponent } from 'app/components/_info/info.module';

export const appRoutes: Routes = [
    {path: 'home', component: homeComponent},
    {path: 'info', component: infoComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' }
];
