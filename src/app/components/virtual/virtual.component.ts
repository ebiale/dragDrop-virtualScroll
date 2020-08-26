import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styles: [
  ]
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  persons = Array(500).fill(0);
  constructor() {
    console.log('persons :>> ', this.persons);
  }

  ngOnInit(): void {
  }

  goToEnd() {
    this.viewPort.scrollToIndex(this.persons.length);
  }

  goToStart() {
    this.viewPort.scrollToIndex(0);
  }
}
