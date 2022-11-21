import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnadoptedKittenItemComponent } from './unadopted-kitten-item.component';

describe('UnadoptedKittenItemComponent', () => {
  let component: UnadoptedKittenItemComponent;
  let fixture: ComponentFixture<UnadoptedKittenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnadoptedKittenItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnadoptedKittenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
