import React, { MouseEventHandler } from 'react';

import clsx from 'clsx';

import { ICommonProps } from 'types/globals';

interface IButtonProps extends ICommonProps {
    color?: 'primary' | 'secondary' | 'accent';
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    text?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className, color = 'primary', text, ...props }) => {
    return (
        <button
            className={clsx(
                'button',
                {
                    [color]: !!color,
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
