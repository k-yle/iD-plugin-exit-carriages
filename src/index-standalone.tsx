//
// this file is the entrypoint for the standalone app only.
// it's not used when this plugin is being rendered by iD.
//
import * as iD from '@openstreetmap/id-plugin-sdk';
import WebComponent from './index-plugin.js';

customElements.define('my-plugin', WebComponent);

declare global {
  interface HTMLElementTagNameMap {
    'my-plugin': WebComponent;
  }
}

const element = document.createElement('my-plugin');
element.init({
  locale: 'en',
  tagsStore: new iD.Store<iD.MultiTags>({}),
});
document.body.append(element);
