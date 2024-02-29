import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarControlGroupComponent } from './toolbar-control-group.component';

describe('ToolbarControlGroupComponent', () => {
  let component: ToolbarControlGroupComponent;
  let fixture: ComponentFixture<ToolbarControlGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarControlGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarControlGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
