import { Component, OnInit } from '@angular/core';
import { OnChangePlugin } from '@rtea/prosemirror-rtea';
import { textElement } from './testDoc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private observer = new OnChangePlugin();
  updates = this.observer.onUpdate();

  doc = textElement;
  plugins = [this.observer];

  ngOnInit(): void {
    this.observer.onUpdate().subscribe((s) => console.info('update:', s));
    this.observer.onChange().subscribe((s) => console.info('change:', s));
  }
}
