import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarNotaVentaComponent } from './generar-nota-venta.component';

describe('GenerarNotaVentaComponent', () => {
  let component: GenerarNotaVentaComponent;
  let fixture: ComponentFixture<GenerarNotaVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarNotaVentaComponent]
    });
    fixture = TestBed.createComponent(GenerarNotaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
