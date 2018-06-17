import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
         Welcome to angular
        </div>
        <product-component></product-component>
    `
})
export class AppComponent { }
