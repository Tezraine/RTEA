import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEditorComponent } from './default-editor.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArteaEditorModule, ArteaToolbarModule } from '@rtea/angular-rtea';

describe('DefaultEditorComponent', () => {
  let component: DefaultEditorComponent;
  let fixture: ComponentFixture<DefaultEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ArteaEditorModule,
        ArteaToolbarModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [DefaultEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
