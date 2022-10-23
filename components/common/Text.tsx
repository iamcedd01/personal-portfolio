import React, { createElement } from 'react';

import clsx from 'clsx';

import useValueAndKey from 'lib/hooks/useValueAndKey';
import { ICommonProps } from 'types/globals';

interface ITextProps extends ICommonProps {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text?: string;
}

const Text: React.FC<ITextProps> = ({ as = 'span', children, className, name, text }) =>
    createElement(
        as,
        {
            className: clsx('tracking-wider', className),
            ['data-cy']: useValueAndKey(name, 'text'),
        },
        text || children
    );

export default Text;
