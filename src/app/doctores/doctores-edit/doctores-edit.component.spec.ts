import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresEditComponent } from './doctores-edit.component';

describe('DoctoresEditComponent', () => {
  let component: DoctoresEditComponent;
  let fixture: ComponentFixture<DoctoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoresEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
