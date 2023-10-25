import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListaDeNomesParaSorteioComponent } from './components/views/view-lista-de-nomes-para-sorteio/view-lista-de-nomes-para-sorteio.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';

const routes: Routes = [
  {path:"", component: MainscreenComponent},
  {path: "viewListaDeNomesParaSorteio" , component : ViewListaDeNomesParaSorteioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
