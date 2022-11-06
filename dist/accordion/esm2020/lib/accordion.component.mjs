import { Component, ContentChildren } from '@angular/core';
import { PanelComponent } from './panel.component';
import * as i0 from "@angular/core";
export class AccordionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FjY29yZGlvbi9zcmMvbGliL2FjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFhbkQsTUFBTSxPQUFPLGtCQUFrQjtJQVM3QixnQkFBZ0IsQ0FBQztJQUxqQixrQkFBa0I7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUEyQixFQUFFLEVBQUUsR0FBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBRWhGLENBQUM7SUFHRCxRQUFRO0lBQ1IsQ0FBQzs7K0dBWlUsa0JBQWtCO21HQUFsQixrQkFBa0IsNEVBRVosY0FBYyw2QkFYckI7Ozs7O0dBS1Q7MkZBSVUsa0JBQWtCO2tCQVg5QixTQUFTOytCQUNFLGVBQWUsWUFDZjs7Ozs7R0FLVDswRUFNZ0MsTUFBTTtzQkFBdEMsZUFBZTt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYWNjb3JkaW9uXCIgPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIFxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oUGFuZWxDb21wb25lbnQpIHBhbmVsczogUXVlcnlMaXN0PFBhbmVsQ29tcG9uZW50PiB8IGFueTtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICB0aGlzLnBhbmVscy5mb3JFYWNoKChwYW5lbDogeyBhY3RpdmU6IGJvb2xlYW47IH0pID0+IHtwYW5lbC5hY3RpdmUgPSBmYWxzZTt9KTtcbiAgICBcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==