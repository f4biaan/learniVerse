import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPonenteComponent } from './crear-ponente.component';

describe('CrearPonenteComponent', () => {
  let component: CrearPonenteComponent;
  let fixture: ComponentFixture<CrearPonenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPonenteComponent]
    });
    fixture = TestBed.createComponent(CrearPonenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
