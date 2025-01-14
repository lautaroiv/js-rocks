import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolChorusComponent } from './cool-chorus.component';

describe('CoolChorusComponent', () => {
  let component: CoolChorusComponent;
  let fixture: ComponentFixture<CoolChorusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolChorusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolChorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
