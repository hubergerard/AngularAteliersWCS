import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenDisplayComponent } from './kitten-display.component';

describe('KittenDisplayComponent', () => {
  let component: KittenDisplayComponent;
  let fixture: ComponentFixture<KittenDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
