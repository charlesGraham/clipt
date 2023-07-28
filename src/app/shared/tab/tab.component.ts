import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() public tabTitle: string = '';
  @Input() public active: boolean = false;

  constructor() { }

  public ngOnInit(): void { }


}
