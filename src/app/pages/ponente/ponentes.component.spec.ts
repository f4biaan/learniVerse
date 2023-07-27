import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonentesComponent } from './ponentes.component';

describe('PonenteComponent', () => {
  let component: PonentesComponent;
  let fixture: ComponentFixture<PonentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PonentesComponent]
    });
    fixture = TestBed.createComponent(PonentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
