import React, { createElement, ReactNode } from 'react';

import cx from 'clsx';

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
                className: cx('section', className),
                ['data-cy']: useValueAndKey(name, 'section'),
                ref,
            },
            <div className={cx('max-w-[1280px] mx-auto py-2xl', wrapperClassName)}>{children}</div>
        )
);

Section.displayName = 'Section';

export default Section;
