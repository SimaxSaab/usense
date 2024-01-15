import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCheckComplexComponent } from './pass-check-complex.component';

describe('PassCheckComplexComponent', () => {
  let component: PassCheckComplexComponent;
  let fixture: ComponentFixture<PassCheckComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassCheckComplexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassCheckComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
