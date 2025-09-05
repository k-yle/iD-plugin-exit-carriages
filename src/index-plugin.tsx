//
// this file is the entrypoint when the plugin is
// imported from iD.
//
import { type Root, createRoot } from 'react-dom/client';
import type * as iD from '@openstreetmap/id-plugin-sdk';
import { App } from './App.js';

export default class WebComponent
  extends HTMLElement
  implements iD.WebComponentPlugin
{
  readonly #domRoot: HTMLBodyElement;

  readonly #reactRoot: Root;

  #data?: iD.PluginData;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.#domRoot = document.createElement('body');
    this.shadowRoot!.append(this.#domRoot);

    this.#reactRoot = createRoot(this.#domRoot);
  }

  init(data: iD.PluginData) {
    this.#data = data;
    this.#reactRoot.render(<App domRoot={this.#domRoot} {...this.#data} />);
  }

  disconnectedCallback() {
    this.#reactRoot.unmount();
  }
}
