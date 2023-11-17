import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarConfirmacionPage } from './recuperar-confirmacion.page';

describe('RecuperarConfirmacionPage', () => {
  let component: RecuperarConfirmacionPage;
  let fixture: ComponentFixture<RecuperarConfirmacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarConfirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
