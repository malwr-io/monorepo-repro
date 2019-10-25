import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[testIdentifier]'
})
export class TestIdentifierDirective {
    private static prefix: string = 'data-attr-test';

    @Input('testIdentifier') testIdentifier: string;

    constructor (private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit () {
        this.renderer.setAttribute(this.el.nativeElement, TestIdentifierDirective.prefix, this.testIdentifier);
    }
}
