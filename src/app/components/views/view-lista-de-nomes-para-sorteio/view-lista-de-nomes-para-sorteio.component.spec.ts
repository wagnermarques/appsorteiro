import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListaDeNomesParaSorteioComponent } from './view-lista-de-nomes-para-sorteio.component';

describe('ViewListaDeNovesParaSorteioComponent', () => {
  let component: ViewListaDeNomesParaSorteioComponent;
  let fixture: ComponentFixture<ViewListaDeNomesParaSorteioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewListaDeNomesParaSorteioComponent]
    });
    fixture = TestBed.createComponent(ViewListaDeNomesParaSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
