import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection3Component } from './injection3.component';

describe('Injection3Component', () => {
  let component: Injection3Component;
  let fixture: ComponentFixture<Injection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Injection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Injection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
