/**
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None, // Make the styles of this component global,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
