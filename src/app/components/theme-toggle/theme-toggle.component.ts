import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light-theme'
    : 'dark-theme';

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, this.currentTheme);
  }

  toggleTheme(): void {
    const bodyElem = this.document.body;
    const isLightTheme = bodyElem.classList.contains('light-theme');
    if (!isLightTheme) {
      this.currentTheme = 'light-theme';
      this.renderer.removeClass(bodyElem, 'dark-theme');
      this.renderer.addClass(bodyElem, this.currentTheme);
    } else {
      this.currentTheme = 'dark-theme';
      this.renderer.removeClass(bodyElem, 'light-theme');
      this.renderer.addClass(bodyElem, this.currentTheme);
    }
  }
}
