import { ITechnology } from './technology';

export enum EExperienceType {
    FullTime = 'Full Time',
    PartTime = 'Part Time',
}

export interface IExperience {
    company: string;
    from: string;
    id: string;
    languages?: ITechnology[];
    location: string;
    position: string;
    summaries?: string[];
    to: string;
    type: EExperienceType;
}
