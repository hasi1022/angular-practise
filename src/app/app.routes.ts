import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { authGaurd } from './app.component';

export const routes: Routes = [ 
    {path: '',redirectTo:'home', pathMatch:'full', },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:[authGaurd]},
  {path:'product/:id',component:ProductComponent}
]
