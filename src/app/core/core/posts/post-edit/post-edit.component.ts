import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../../form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngp-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  postForm: FormGroup | undefined;

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.postForm = this.formService.createPostForm();
    console.log(this.postForm);
  }


}
