import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchSpaceComponent } from './scratch-space.component';

describe('ScratchSpaceComponent', () => {
  let component: ScratchSpaceComponent;
  let fixture: ComponentFixture<ScratchSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
