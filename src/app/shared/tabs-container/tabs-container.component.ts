import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  constructor() { }

  public ngOnInit(): void { console.log(this.tabs) }
}
