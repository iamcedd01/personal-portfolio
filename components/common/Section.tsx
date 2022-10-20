import React, { createElement, ReactNode } from 'react';

import clsx from 'clsx';

import useValueAndKey from 'lib/hooks/useValueAndKey';
import { ICommonProps } from 'types/globals';

interface ISectionProps extends ICommonProps {
    as?: 'footer' | 'header' | 'section';
    children?: ReactNode;
    wrapperClassName?: string;
}

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
    ({ as = 'section', children, className, name, wrapperClassName }, ref) =>
        createElement(
            as,
            {
                className: clsx('section', className),
                ['data-cy']: useValueAndKey(name, 'section'),
                ref,
            },
            <div className={clsx('m-auto w-full py-2xl xs:max-w-[768px] xl:max-w-[1280px]', wrapperClassName)}>
                {children}
            </div>
        )
);

Section.displayName = 'Section';

export default Section;
