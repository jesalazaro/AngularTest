
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html'
})

export class PanelComponent implements OnChanges {

  @Input() activate: string = "";
  @Input() title: string = "";
  @Output() closeOtherPanels: EventEmitter<string> = new EventEmitter();

  active : boolean = false;

ngOnChanges(changes : SimpleChanges){
  if(changes?.['activate']){
    this.active = this.activate == this.title;
  }
}

  toggle() {
    this.active = !this.active;
    if(this.active){
      this.closeOtherPanels.emit(this.title);
    }
  }

}