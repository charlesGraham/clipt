import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  constructor() { }

  public ngOnInit(): void { }

  public ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(tab => tab.active);

    if (!activeTabs || activeTabs.length === 0) this.selectTab(this.tabs!.first);
  }

  public selectTab(tab: TabComponent): boolean {
    this.tabs?.forEach(tab => tab.active = false);

    tab.active = true;

    return false;
  }

}
