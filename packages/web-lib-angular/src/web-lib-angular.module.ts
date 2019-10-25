import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TestIdentifierDirective } from './directives/test-identifier/test-identifier.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugComponent } from './components/debug/debug.component';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
    // Modules
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        PipesModule
    ],
    // Components/directives
    declarations: [
        TestIdentifierDirective,
        DebugComponent
    ],
    // Components/directives to export
    exports: [
        TestIdentifierDirective,
        DebugComponent,
        PipesModule
    ],
    // Services
    providers: []
})
export class WebLibAngularModule {}
