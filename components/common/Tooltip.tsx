import { useState } from 'react';

import clsx from 'clsx';

interface ITooltipProps {
    delay?: number;
    direction?: 'bottom' | 'left' | 'right' | 'top';
    onHide?: () => void;
    onShow?: () => void;
    title: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ children, delay = 500, direction = 'top', onHide, onShow, title }) => {
    let timeout: NodeJS.Timeout;
    const [active, setActive] = useState<boolean>(false);

    const showTooltip = () => {
        timeout = setTimeout(() => {
            setActive(true);
            onShow?.();
        }, delay);
    };

    const hideTooltip = () => {
        clearInterval(timeout);
        setActive(false);
        onHide?.();
    };

    return (
        <span className="tooltip" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {active && title && (
                <div
                    className={clsx('tooltip-wrapper', {
                        [`tooltip-${direction}`]: !!direction,
                    })}
                >
                    {title}
                </div>
            )}
        </span>
    );
};

export default Tooltip;
