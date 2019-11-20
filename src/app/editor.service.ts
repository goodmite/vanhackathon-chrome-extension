import {Injectable} from '@angular/core';

declare const SimpleMDE: any;
declare const markdownit: any;

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private markdownParser: any;

  constructor() {
    this.markdownParser = new markdownit();
  }


  customMarkdownParser(mdText: string) {
    return this.markdownParser.renderInline(mdText);
  }

  /*
  * https://simplemde.com/
  * */
  editorInit(editorTextarea: HTMLElement) {
    return new SimpleMDE({
      element: editorTextarea,
      spellChecker: false,
      autosave: {
        enabled: true,
        unique_id: 'demo2',
      },
      previewRender: (plainText: any, preview: { innerHTML: any; }) => { // Async method
        setTimeout(() => {
          preview.innerHTML = this.customMarkdownParser(plainText);
        }, 250);
        return 'Loading...';
      },
    });
  }
}
