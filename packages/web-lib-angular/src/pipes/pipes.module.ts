import { NgModule } from '@angular/core';
import { MaxCharactersPipe } from './max-characters.pipe';

@NgModule({
    declarations: [
        MaxCharactersPipe
    ],
    exports: [
        MaxCharactersPipe
    ]
})
export class PipesModule { }

