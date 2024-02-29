import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarControlComponent } from './toolbar-control.component';

describe('ToolbarControlComponent', () => {
  let component: ToolbarControlComponent;
  let fixture: ComponentFixture<ToolbarControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
