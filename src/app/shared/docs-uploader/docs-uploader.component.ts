import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SLIPS_ALLOWED, SlipUploadValidator} from "../helpers/validators/slip-upload-validator";
import * as XLSX from 'xlsx';
import {tableDataType, TableMapper} from "./table-mapper";

const copies = {
  empty: 'Please select the slip type',
  notImplemented: 'There\'s no processing for the document type yet',
  load: 'Click for loading of a document'
};

export const CUSTOM_FILE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DocsUploaderComponent),
  multi: true
};

@Component({
  selector: 'app-docs-uploader',
  templateUrl: './docs-uploader.component.html',
  styleUrls: ['./docs-uploader.component.scss'],
  providers: [CUSTOM_FILE_CONTROL_VALUE_ACCESSOR]
})
export class DocsUploaderComponent implements ControlValueAccessor, OnInit, OnChanges {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  @Input() name: string;
  @Input() error: string;
  @Input() formItem: FormControl = new FormControl();
  @Input() disabled: boolean;
  @Input() valid: boolean;

  @Output() onTableData: EventEmitter<any> = new EventEmitter<any>(false);

  onChange: Function;
  private file: File | null = null;

  isInvalid = false;
  isEmpty = true;
  labelText: string;



  @HostListener('change', ['$event.target']) emitFiles( event: any ): void {
    let file = event && event.files && event.files.item(0);
    let fileLoaded = false;

    if (file && file.type) {
      if (SlipUploadValidator.checkForExtension(SLIPS_ALLOWED, file.type)) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          const buffer = fileReader.result as ArrayBufferLike;
          const data = new Uint8Array(buffer);
          const arr = [];
          for (let i = 0; i !== data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
          }
          const bstr = arr.join('');

          const workbook = XLSX.read(bstr, { type: 'binary' });

          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];

          const results = XLSX.utils.sheet_to_json(worksheet,{ raw: true, defval: '' });
          this.labelText = file.name;
          this.onTableData.emit(TableMapper.mapParsedData(tableDataType.notLifePremium, results));
        };

        this.isInvalid = false;
        this.valid = true;

        fileReader.readAsArrayBuffer(file);
      } else {
        file = null;
        fileLoaded = true;
        this.isInvalid = true;
        this.error = 'You can only upload .xlsx, or .xls images';
        return;
      }
    }

    if (!file && this.file) {
      return;
    }
  }

  constructor(
    private host: ElementRef<HTMLInputElement>
  ) {
    this.name = '';
    this.error = '';
    this.disabled = true;
    this.valid = true;
    this.labelText = copies.empty;
    this.onChange = () => {};
  }

  writeValue( value: null ): void {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ): void {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ): void {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {}

  selectDocType($event: any): void {
    switch (+$event.target.value) {
      case 0:
        this.disabled = true;
        this.labelText = copies.empty;
        this.onTableData.emit([]);
        break;
      case tableDataType.notLifePremium:
        this.disabled = false;
        this.labelText = copies.load;
        setTimeout(() => this.fileInput?.nativeElement.click(), 20);
        break;
      default:
        this.disabled = true;
        this.labelText = copies.notImplemented;
        this.onTableData.emit([]);
        break;
    }
  }
}
