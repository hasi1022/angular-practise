import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection4Component } from './injection4.component';

describe('Injection4Component', () => {
  let component: Injection4Component;
  let fixture: ComponentFixture<Injection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Injection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Injection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
