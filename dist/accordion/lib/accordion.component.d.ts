import { OnInit, QueryList } from '@angular/core';
import { PanelComponent } from './panel.component';
import * as i0 from "@angular/core";
export declare class AccordionComponent implements OnInit {
    panels: QueryList<PanelComponent> | any;
    ngAfterContentInit(): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "lib-accordion", never, {}, {}, ["panels"], ["*"], false>;
}
