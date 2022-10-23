import React, { createElement, ReactNode } from 'react';

import clsx from 'clsx';

import useValueAndKey from 'lib/hooks/useValueAndKey';
import { ICommonProps, ICommonSpacing } from 'types/globals';

interface ISectionProps extends ICommonProps {
    as?: 'footer' | 'header' | 'section';
    children?: ReactNode;
    fullWidth?: boolean;
    padding?: keyof ICommonSpacing;
    wrapperClassName?: string;
}

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
    ({ as = 'section', children, className, fullWidth, name, padding = '4xl', wrapperClassName }, ref) =>
        createElement(
            as,
            {
                className: clsx('section', className),
                ['data-cy']: useValueAndKey(name, 'section'),
                ref,
            },
            <div
                className={clsx(
                    'm-auto w-full',
                    {
                        'max-w-full': fullWidth,
                        'xs:max-w-[768px] xl:max-w-wrapper': !fullWidth,
                        [useValueAndKey(padding, 'py') as string]: !!padding,
                    },
                    wrapperClassName
                )}
            >
                {children}
            </div>
        )
);

Section.displayName = 'Section';

export default Section;
