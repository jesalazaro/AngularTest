import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class PanelComponent {
    constructor() {
        this.activate = "";
        this.title = "";
        this.closeOtherPanels = new EventEmitter();
        this.active = false;
    }
    ngOnChanges(changes) {
        if (changes?.['activate']) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYWNjb3JkaW9uL3NyYy9saWIvcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvYWNjb3JkaW9uL3NyYy9saWIvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBT2pHLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBT1csYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRFLFdBQU0sR0FBYSxLQUFLLENBQUM7S0FlMUI7SUFiRCxXQUFXLENBQUMsT0FBdUI7UUFDakMsSUFBRyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQztJQUNILENBQUM7SUFFQyxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDOzsyR0FuQlUsY0FBYzsrRkFBZCxjQUFjLHVLQ1IzQixrVEFVUTsyRkRGSyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLE9BQU87OEJBTVIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBhY3RpdmF0ZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gIEBPdXRwdXQoKSBjbG9zZU90aGVyUGFuZWxzOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhY3RpdmUgOiBib29sZWFuID0gZmFsc2U7XG5cbm5nT25DaGFuZ2VzKGNoYW5nZXMgOiBTaW1wbGVDaGFuZ2VzKXtcbiAgaWYoY2hhbmdlcz8uWydhY3RpdmF0ZSddKXtcbiAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuYWN0aXZhdGUgPT0gdGhpcy50aXRsZTtcbiAgfVxufVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICBpZih0aGlzLmFjdGl2ZSl7XG4gICAgICB0aGlzLmNsb3NlT3RoZXJQYW5lbHMuZW1pdCh0aGlzLnRpdGxlKTtcbiAgICB9XG4gIH1cblxufSIsIjxkaXYgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgI0IwQjBCMDsgcGFkZGluZzogOHB4O1wiID5cblxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxwPnt7dGl0bGV9fSA8YSAoY2xpY2spPVwidG9nZ2xlKClcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIj5Ub2dnbGU8L2E+PC9wPlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIFtoaWRkZW5dPVwiIWFjdGl2ZVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAgXG4gICAgPC9kaXY+XG4gIFxuICA8L2Rpdj4iXX0=