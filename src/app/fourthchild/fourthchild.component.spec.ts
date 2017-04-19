import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthchildComponent } from './fourthchild.component';

describe('FourthchildComponent', () => {
  let component: FourthchildComponent;
  let fixture: ComponentFixture<FourthchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
