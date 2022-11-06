import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { PanelComponent } from './panel.component';

@Component({
  selector: 'lib-accordion',
  template: `
<div class="accordion" >
    <ng-content></ng-content>
  </div>
  
  `,
  styles: [
  ]
})
export class AccordionComponent implements OnInit {

  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent> | any;

  ngAfterContentInit() {

    this.panels.forEach((panel: { active: boolean; }) => {panel.active = false;});
    
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
