import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuedaLivreComponent } from './pages/queda-livre/queda-livre.component';
import { MuaComponent } from './pages/mua/mua.component';
import { ColisaoComponent } from './pages/colisao/colisao.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'queda-livre', component: QuedaLivreComponent},
    {path: 'mua', component: MuaComponent},
    {path: 'colisao', component: ColisaoComponent}
];
