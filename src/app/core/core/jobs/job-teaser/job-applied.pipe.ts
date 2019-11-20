import {Pipe, PipeTransform} from '@angular/core';
import {AuthStorageService} from '../../../../auth/auth.service';
import {IUser} from '../../../../typings/auth';
import {IJob} from '../../../../typings/job';

@Pipe({
  name: 'jobApplied'
})
export class JobAppliedPipe implements PipeTransform {

  transform(job: IJob, action?: string): any {
    if (action) {
      if (this.arrayHasUserId(job[action])) {
        return action;
      }
      return null;
    }
    if (this.arrayHasUserId(job.hire)) {
      return 'hire';
    } else if (this.arrayHasUserId(job.offer)) {
      return 'offer';
    } else if (this.arrayHasUserId(job.interview)) {
      return 'interview';
    } else if (this.arrayHasUserId(job.apply)) {
      return 'apply';
    }
  }

  arrayHasUserId(arr: string[]) {
    const user: IUser = AuthStorageService.getUser();
    const userId = user._id;
    if (!arr || !userId) {
      return false;
    }
    return !!arr.find(candidateId => candidateId === userId);
  }

}
