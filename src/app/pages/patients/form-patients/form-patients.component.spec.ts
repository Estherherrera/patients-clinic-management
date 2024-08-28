import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPatientsComponent } from './form-patients.component';

describe('FormPatientsComponent', () => {
  let component: FormPatientsComponent;
  let fixture: ComponentFixture<FormPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
