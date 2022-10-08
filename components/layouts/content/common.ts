import { ICommonProps, ICommonSpacing } from 'types/globals';

export interface ICommonFlexProps extends ICommonProps {
    alignItems?: string;
    flexDirection?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    gap?: keyof ICommonSpacing;
    justifyContent?: string;
}
