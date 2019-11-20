export interface ISkill {
  'match': true;
  'id': 0;
  'name': string;
  'required': true;
}

export interface IJob {
  'positionName': string;
  'description': string;
  'descriptionHtml': string;
  'company': null;
  'city': string;
  'country': string;
  'postDate': string;
  'mustHaveSkills': ISkill[];
  'niceToHaveSkills': ISkill[];
  'jobType': string;
  'salaryRangeStart': null;
  'salaryRangeEnd': null;
  'applied': true;
  'apply': string[];
  'hire': string[];
  'offer': string[];
  'interview': string[];
  'favorited': false;
  'newJob': true;
  'matchPorcentage': number;
  'currency': string;
  'id': number;
}
