import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // PRUEBA UNITARIA

  it('Se debe crear una alerta si correo está vacío', async () => {
    component.email = '';
    component.pass = '123456';
    await component.login();
    
    expect(component.helperService.showAlert).toHaveBeenCalled();
    
  });
});
