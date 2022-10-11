import cx from 'clsx';

import Link from 'components/common/Link';
import { ICommonSpacing } from 'types/globals';

interface IBrandProps {
    size?: keyof ICommonSpacing;
}

const Brand: React.FC<IBrandProps> = ({ size = 'l' }) => (
    <Link
        className={cx('font-bold capitalize tracking-widest', {
            [`text-${size}`]: !!size,
        })}
        href="/"
        name="brand"
    >
        Cedd
    </Link>
);

export default Brand;
