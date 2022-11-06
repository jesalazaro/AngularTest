import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PanelComponent implements OnChanges {
    activate: string;
    title: string;
    closeOtherPanels: EventEmitter<string>;
    active: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelComponent, "panel", never, { "activate": "activate"; "title": "title"; }, { "closeOtherPanels": "closeOtherPanels"; }, never, ["*"], false>;
}
