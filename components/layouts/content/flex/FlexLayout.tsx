import clsx from 'clsx';

import { ICommonFlexProps } from 'components/layouts/content/common';
import useValueAndKey from 'lib/hooks/useValueAndKey';

type IFlexLayoutProps = ICommonFlexProps;

const FlexLayout: React.FC<IFlexLayoutProps> = ({ children, className, name }) => (
    <div className={clsx('flex w-full', className)} data-cy={useValueAndKey(name, 'flex-layout')}>
        {children}
    </div>
);

export default FlexLayout;
