import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DebugService {
    public getDebugInfo (): string {
        return `Lorem inspum larium pretosium vingardium leviosa
       Mauris interdum tellus ex, ut posuere quam imperdiet vel.`;
    }

}

