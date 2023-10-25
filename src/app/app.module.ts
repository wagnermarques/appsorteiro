import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { SorteioscreenComponent } from './components/sorteioscreen/sorteioscreen.component';
import { FileuploadComponent } from './components/widget/fileupload/fileupload.component';
import { ViewListaDeNomesParaSorteioComponent } from './components/views/view-lista-de-nomes-para-sorteio/view-lista-de-nomes-para-sorteio.component';
import { BtnHomeComponent } from './components/widget/btn-home/btn-home.component';
import { BtnBackComponent } from './components/widget/btn-back/btn-back.component';
import { AppHeaderComponent } from './components/widget/app-header/app-header.component';
import { AppFooterComponent } from './components/widget/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainscreenComponent,
    SorteioscreenComponent,
    FileuploadComponent,
    ViewListaDeNomesParaSorteioComponent,
    BtnHomeComponent,
    BtnBackComponent, 
    AppFooterComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
