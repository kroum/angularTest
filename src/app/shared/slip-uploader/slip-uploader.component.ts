import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-slip-uploader',
  templateUrl: './slip-uploader.component.html',
  styleUrls: ['./slip-uploader.component.scss']
})
export class SlipUploaderComponent implements OnInit, OnChanges {
  @ViewChild('scrollViewport', { static: true})
  public virtualScrollViewport: CdkVirtualScrollViewport | undefined;


  tableData: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  setTable($event: any | Array<any>): void {
    console.log($event);
    this.tableData = $event;
    setTimeout(() => this.virtualScrollViewport?.scrollToIndex(35), 150);
  }
}
