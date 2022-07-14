import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlipUploaderComponent } from './slip-uploader/slip-uploader.component';
import { DocsUploaderComponent } from './docs-uploader/docs-uploader.component';
import {ScrollingModule} from "@angular/cdk/scrolling";



@NgModule({
  declarations: [
    SlipUploaderComponent,
    DocsUploaderComponent
  ],
  exports: [
    SlipUploaderComponent
  ],
    imports: [
        CommonModule,
        ScrollingModule
    ]
})
export class SharedModule { }
