import { Component } from '@angular/core';
import { DebugService } from 'web-lib-angular';

@Component({
    selector: 'start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {
    public debugInfo: string;

    constructor (private debugService: DebugService) {
        this.debugInfo = this.debugService.getDebugInfo();
    }
}
