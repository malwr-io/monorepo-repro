import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebLibAngularModule } from 'web-lib-angular';
import { StartComponent } from './components/start/start.component';

@NgModule({
    declarations: [
        AppComponent,
        StartComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: false,
            useHash: true
        }),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        WebLibAngularModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
