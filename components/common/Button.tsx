import React, { MouseEventHandler } from 'react';

import clsx from 'clsx';

import { ICommonProps } from 'types/globals';

interface IButtonProps extends ICommonProps {
    color?: 'primary' | 'secondary';
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    outlined?: boolean;
    text?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className, color = 'primary', outlined, text, ...props }) => {
    return (
        <button
            className={clsx(
                'button',
                {
                    [color]: !!color,
                    outlined: !!outlined,
                },
                className
            )}
            {...props}
        >
            {text || children}
        </button>
    );
};

export default Button;
