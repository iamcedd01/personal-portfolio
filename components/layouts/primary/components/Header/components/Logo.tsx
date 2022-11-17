import clsx from 'clsx';

import Text from 'components/common/Text';
import { ICommonProps } from 'types/globals';

type ILogoProps = ICommonProps;

const Logo: React.FC<ILogoProps> = ({ className }) => {
    return (
        <Text className={clsx('font-extrabold text-secondaryDark', className)}>
            Cedd <Text className="font-bold text-primaryLight" text="Estrada" />
        </Text>
    );
};

export default Logo;
