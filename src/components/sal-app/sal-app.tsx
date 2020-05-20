import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sal-app',
  styleUrl: 'sal-app.css',
  shadow: true,
})
export class SalApp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
