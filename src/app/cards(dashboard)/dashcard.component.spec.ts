import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashcard } from './dashcard.component';

describe('Dashcard', () => {
  let component: Dashcard;
  let fixture: ComponentFixture<Dashcard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashcard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
