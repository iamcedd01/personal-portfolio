import clsx from 'clsx';

import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import { ICommonProps } from 'types/globals';

interface IAboutSummaryProps extends ICommonProps {
    label: string;
    value?: string;
}

const AboutSummary: React.FC<IAboutSummaryProps> = ({ className, label, value }) => {
    return (
        <FlexLayout className={clsx('flex-col gap-xs', className)}>
            {value && <Text className="text-center text-xl font-bold" text={value} />}
            <Text className="text-center text-m font-bold text-general" text={label} />
        </FlexLayout>
    );
};

export default AboutSummary;
