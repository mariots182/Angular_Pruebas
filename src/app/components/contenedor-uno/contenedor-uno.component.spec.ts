import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorUnoComponent } from './contenedor-uno.component';

describe('ContenedorUnoComponent', () => {
  let component: ContenedorUnoComponent;
  let fixture: ComponentFixture<ContenedorUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
