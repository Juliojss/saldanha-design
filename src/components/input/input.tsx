import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'sal-input',
    styleUrl: 'input.css'
})
export class Input {

    @Prop() placeholder: string;
    @Prop() type: string;

    render() {
        return (
            <input type={this.type} placeholder={this.placeholder} />
        );
    }
}
