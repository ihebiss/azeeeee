import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentsComponent } from './update-appointment.component';

describe('UpdateAppointmentComponent', () => {
  let component: UpdateAppointmentsComponent;
  let fixture: ComponentFixture<UpdateAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
