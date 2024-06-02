import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresCreateComponent } from './doctores-create.component';

describe('DoctoresCreateComponent', () => {
  let component: DoctoresCreateComponent;
  let fixture: ComponentFixture<DoctoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoresCreateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DoctoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
