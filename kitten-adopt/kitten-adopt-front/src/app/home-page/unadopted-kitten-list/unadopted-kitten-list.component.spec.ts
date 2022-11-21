import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnadoptedKittenListComponent } from './unadopted-kitten-list.component';

describe('UnadoptedKittenListComponent', () => {
  let component: UnadoptedKittenListComponent;
  let fixture: ComponentFixture<UnadoptedKittenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnadoptedKittenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnadoptedKittenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
