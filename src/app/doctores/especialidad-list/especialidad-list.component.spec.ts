import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadListComponent } from './especialidadListComponent';

describe('EspecialidadListComponent', () => {
  let component: EspecialidadListComponent;
  let fixture: ComponentFixture<EspecialidadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspecialidadListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EspecialidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
