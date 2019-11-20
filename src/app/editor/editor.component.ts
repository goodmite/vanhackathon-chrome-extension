import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EditorService} from '../editor.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'ngp-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: EditorComponent,
    multi: true
  }]
})
export class EditorComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  constructor(private editorService: EditorService) {
  }
  changeFn: ((str: string) => undefined) | undefined;
  editor: any;
  value: string | undefined;
  @ViewChild('editorRef', {static: false}) editorRef: ElementRef<any> | undefined;

  isDisabled = false;

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const editorTextarea = (this.editorRef as ElementRef<any>).nativeElement;
    const editor = this.editorService.editorInit(editorTextarea);
    editor.codemirror.on('change', () => {
      if(this.changeFn){
        this.changeFn(editor.value());
      }
    });
  }


  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    console.log(fn);

  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: any): void {
    // this.edi;
    console.log(obj);
  }

}
