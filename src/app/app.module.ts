import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultEditorModule } from 'projects/rtea/starter-pack/src/lib/basics/default-editor/default-editor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [DefaultEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
