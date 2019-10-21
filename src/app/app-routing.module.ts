import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { AdminComponent } from './admin/admin.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'cadastro-produtos', component: CadastroProdutosComponent},
  { path: 'admin', component: AdminComponent },
  {path: 'home', component: HomePageComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
