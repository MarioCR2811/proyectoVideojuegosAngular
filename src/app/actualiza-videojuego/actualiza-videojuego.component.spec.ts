import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaVideojuegoComponent } from './actualiza-videojuego.component';

describe('ActualizaVideojuegoComponent', () => {
  let component: ActualizaVideojuegoComponent;
  let fixture: ComponentFixture<ActualizaVideojuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizaVideojuegoComponent]
    });
    fixture = TestBed.createComponent(ActualizaVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
