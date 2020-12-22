import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicurdComponent } from './apicurd.component';

describe('ApicurdComponent', () => {
  let component: ApicurdComponent;
  let fixture: ComponentFixture<ApicurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApicurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
