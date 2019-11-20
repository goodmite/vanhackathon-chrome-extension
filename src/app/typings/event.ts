export enum EEventType {
  Leaps = "Leaps",
  VanHackathons = "VanHackathons",
  Missions = "Missions",
  Webinar = "Webinar",
}

export enum EUserType {
  premium,
  nonPremium,

}

export interface IEvent {
  from?: Date;
  to?: Date;
  name?: string;
  detail?: string;
  id?: string;
  _id?: string;
  type?: EEventType;
  accepted?: string[];
  rejected?: string[];
}

export interface ICellData {
  date: Date;
  isPast: boolean;
  events: IEvent[];
}
