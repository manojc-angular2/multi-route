import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdchildComponent } from './thirdchild.component';

describe('ThirdchildComponent', () => {
  let component: ThirdchildComponent;
  let fixture: ComponentFixture<ThirdchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
