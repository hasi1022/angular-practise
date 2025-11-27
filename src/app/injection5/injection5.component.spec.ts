import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection5Component } from './injection5.component';

describe('Injection5Component', () => {
  let component: Injection5Component;
  let fixture: ComponentFixture<Injection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Injection5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Injection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
