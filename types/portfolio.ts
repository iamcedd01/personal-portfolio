export enum EPortfolioType {
    Personal = 1,
    Professional = 2,
}

export interface IPortfolioItem {
    demoUrl?: string;
    description?: string;
    githubUrl?: string;
    id: string;
    name: string;
    shortDescription?: string;
    technologyUsed?: string[];
    thumbnail: string;
    type: EPortfolioType;
}
