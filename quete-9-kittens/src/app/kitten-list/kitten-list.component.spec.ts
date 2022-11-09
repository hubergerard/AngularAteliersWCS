import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenListComponent } from './kitten-list.component';

describe('KittenListComponent', () => {
  let component: KittenListComponent;
  let fixture: ComponentFixture<KittenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
