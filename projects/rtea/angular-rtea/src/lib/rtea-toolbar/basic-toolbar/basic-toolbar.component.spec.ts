import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToolbarComponent } from './basic-toolbar.component';
import { RteaToolbarComponent } from '../toolbar.component';
import { ToolbarControlGroupComponent } from '../toolbar-control-group/toolbar-control-group.component';
import { ToolbarControlComponent } from '../toolbar-control/toolbar-control.component';
import { CommonModule } from '@angular/common';

describe('BasicToolbarComponent', () => {
  let component: BasicToolbarComponent;
  let fixture: ComponentFixture<BasicToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [
        RteaToolbarComponent,
        ToolbarControlComponent,
        ToolbarControlGroupComponent,
        BasicToolbarComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
