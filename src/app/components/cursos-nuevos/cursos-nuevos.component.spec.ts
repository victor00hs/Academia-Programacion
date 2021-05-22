import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNuevosComponent } from './cursos-nuevos.component';

describe('CursosNuevosComponent', () => {
  let component: CursosNuevosComponent;
  let fixture: ComponentFixture<CursosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosNuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
