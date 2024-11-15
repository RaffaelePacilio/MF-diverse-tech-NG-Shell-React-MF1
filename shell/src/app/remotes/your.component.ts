import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import { createRoot } from 'react-dom/client';


@Component({
  selector: 'app-your-component',
  template: '<div id="react-container"></div>',
})
export class YourComponent implements OnInit, AfterViewInit {
  private shadowRoot: ShadowRoot | null = null;

  constructor(private elRef: ElementRef) {}

  async ngOnInit() {
    try {
      // Carica il modulo remoto
      const reactModule = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/dist/assets/remoteEntry.js',
        exposedModule: './App',
      });

      // Accedi al componente React principale
      const { default: ReactApp } = reactModule;

      // Esegui il rendering del componente React nel contenitore
      if (this.shadowRoot) {
        // Inserisci il CSS nello Shadow DOM
        const cssFiles = [
          'http://localhost:5173/dist/assets/__federation_expose_App-B_SY1GJM.css',
          'http://localhost:5173/dist/assets/__federation_expose_Styles-nHt7C2eK.css',
        ];

        cssFiles.forEach(href => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          this.shadowRoot!.appendChild(link);
        });

        // Renderizza il componente React
        const root = createRoot(this.shadowRoot);
        root.render(React.createElement(ReactApp));
      }
    } catch (error) {
      console.error('Error loading remote module:', error);
    }
  }

  ngAfterViewInit() {
    // Crea uno Shadow DOM nel contenitore Angular
    const container = this.elRef.nativeElement.querySelector('#react-container');
    if (container) {
      this.shadowRoot = container.attachShadow({ mode: 'open' });
    }
  }
}
