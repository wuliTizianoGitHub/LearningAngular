import { Component } from '@angular/core';

@Component({
    selector: 'key-up3',
    template: `
    <input #box (keyup.enter) = "onKeyEnter(box.value)" />
    <p>{{value}}</p>
    `
})

export class KeyUpComponent_v3 {
    value = '';
    onKeyEnter(value: string) {
        this.value = value;
    }
}
