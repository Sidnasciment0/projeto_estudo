import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosUmComponent } from './exercicios-um.component';

describe('ExerciciosUmComponent', () => {
  let component: ExerciciosUmComponent;
  let fixture: ComponentFixture<ExerciciosUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
