import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultEditorComponent } from './default-editor/default-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArteaToolbarModule } from '@rtea/angular-rtea';
import { ArteaEditorModule } from '@rtea/angular-rtea';

@NgModule({
  declarations: [DefaultEditorComponent],
  imports: [
    CommonModule,
    ArteaEditorModule,
    ArteaToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [DefaultEditorComponent],
})
export class DefaultEditorModule {}
