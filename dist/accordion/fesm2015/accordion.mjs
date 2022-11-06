import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, ContentChildren, NgModule } from '@angular/core';

class AccordionService {
    constructor() { }
}
AccordionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AccordionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PanelComponent {
    constructor() {
        this.activate = "";
        this.title = "";
        this.closeOtherPanels = new EventEmitter();
        this.active = false;
    }
    ngOnChanges(changes) {
        if (changes === null || changes === void 0 ? void 0 : changes['activate']) {
            this.active = this.activate == this.title;
        }
    }
    toggle() {
        this.active = !this.active;
        if (this.active) {
            this.closeOtherPanels.emit(this.title);
        }
    }
}
PanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: PanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.9", type: PanelComponent, selector: "panel", inputs: { activate: "activate", title: "title" }, outputs: { closeOtherPanels: "closeOtherPanels" }, usesOnChanges: true, ngImport: i0, template: "<div style=\"border-bottom: 1px solid #B0B0B0; padding: 8px;\" >\n\n    <div class=\"header\">\n      <p>{{title}} <a (click)=\"toggle()\" style=\"float: right;\">Toggle</a></p>\n    </div>\n  \n    <div class=\"content\" [hidden]=\"!active\">\n      <ng-content></ng-content>  \n    </div>\n  \n  </div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: PanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'panel', template: "<div style=\"border-bottom: 1px solid #B0B0B0; padding: 8px;\" >\n\n    <div class=\"header\">\n      <p>{{title}} <a (click)=\"toggle()\" style=\"float: right;\">Toggle</a></p>\n    </div>\n  \n    <div class=\"content\" [hidden]=\"!active\">\n      <ng-content></ng-content>  \n    </div>\n  \n  </div>" }]
        }], propDecorators: { activate: [{
                type: Input
            }], title: [{
                type: Input
            }], closeOtherPanels: [{
                type: Output
            }] } });

class AccordionComponent {
    constructor() { }
    ngAfterContentInit() {
        this.panels.forEach((panel) => { panel.active = false; });
    }
    ngOnInit() {
    }
}
AccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.9", type: AccordionComponent, selector: "lib-accordion", queries: [{ propertyName: "panels", predicate: PanelComponent }], ngImport: i0, template: `
<div class="accordion" >
    <ng-content></ng-content>
  </div>
  
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-accordion', template: `
<div class="accordion" >
    <ng-content></ng-content>
  </div>
  
  ` }]
        }], ctorParameters: function () { return []; }, propDecorators: { panels: [{
                type: ContentChildren,
                args: [PanelComponent]
            }] } });

class AccordionModule {
}
AccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.9", ngImport: i0, type: AccordionModule, declarations: [AccordionComponent], exports: [AccordionComponent] });
AccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccordionComponent
                    ],
                    imports: [],
                    exports: [
                        AccordionComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of accordion
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionModule, AccordionService };
//# sourceMappingURL=accordion.mjs.map
