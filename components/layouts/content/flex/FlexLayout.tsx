import cx from 'clsx';

import { ICommonFlexProps } from 'components/layouts/content/common';
import useValueAndKey from 'lib/hooks/useValueAndKey';

type IFlexLayoutProps = ICommonFlexProps;

const FlexLayout: React.FC<IFlexLayoutProps> = ({
    alignItems = 'center',
    children,
    className,
    flexDirection,
    gap = '',
    justifyContent = 'between',
    name,
}) => (
    <div
        className={cx(
            'flex h-full w-full flex-1',
            {
                [`flex-${flexDirection}`]: !!flexDirection,
                [`gap-${gap}`]: !!gap,
                [`items-${alignItems}`]: !!alignItems,
                [`justify-${justifyContent}`]: !!justifyContent,
            },
            className
        )}
        data-cy={useValueAndKey(name, 'flex-layout')}
    >
        {children}
    </div>
);

export default FlexLayout;
