import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecyclehook2Component } from './lifecyclehook2.component';

describe('Lifecyclehook2Component', () => {
  let component: Lifecyclehook2Component;
  let fixture: ComponentFixture<Lifecyclehook2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifecyclehook2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifecyclehook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
