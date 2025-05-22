import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuendeComponent } from './duende.component';

describe('DuendeComponent', () => {
  let component: DuendeComponent;
  let fixture: ComponentFixture<DuendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuendeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
