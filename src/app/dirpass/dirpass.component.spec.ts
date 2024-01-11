import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirpassComponent } from './dirpass.component';

describe('DirpassComponent', () => {
  let component: DirpassComponent;
  let fixture: ComponentFixture<DirpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirpassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
