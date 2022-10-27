import clsx from 'clsx';

import useValueAndKey from 'lib/hooks/useValueAndKey';
import { ICommonProps } from 'types/globals';

const FlexLayout: React.FC<ICommonProps> = ({ children, className, name }) => (
    <div className={clsx('flex w-full', className)} data-cy={useValueAndKey(name, 'flex-layout')}>
        {children}
    </div>
);

export default FlexLayout;
