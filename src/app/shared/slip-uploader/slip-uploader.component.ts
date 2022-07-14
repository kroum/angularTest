import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-slip-uploader',
  templateUrl: './slip-uploader.component.html',
  styleUrls: ['./slip-uploader.component.scss']
})
export class SlipUploaderComponent implements OnInit, OnChanges {
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
  }
}
