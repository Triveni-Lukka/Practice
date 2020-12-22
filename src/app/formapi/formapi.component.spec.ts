import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapiComponent } from './formapi.component';

describe('FormapiComponent', () => {
  let component: FormapiComponent;
  let fixture: ComponentFixture<FormapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
