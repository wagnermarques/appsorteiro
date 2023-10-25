import { Component } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent {
  appTitle = 'App Sorteios';
  btnLb_CarregarListaDeNoves = "Clique aqui para carregar Lista De nomes para sorteio"; 
}
