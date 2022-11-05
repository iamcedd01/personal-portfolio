import clsx from 'clsx';
import NextImage from 'next/image';

import Text from 'components/common/Text';
import Tooltip from 'components/common/Tooltip';
import { FlexLayout } from 'components/layouts/content';
import { ICommonProps } from 'types/globals';

import { ITechnologyItem } from './types';

interface ITechnologyGroupProps extends ICommonProps {
    items: ITechnologyItem[];
    title: string;
}

const TechnologyGroup: React.FC<ITechnologyGroupProps> = ({ className, items, title }) => {
    return (
        <div className={clsx('technologies', className)}>
            <FlexLayout className="relative z-[1] h-full w-full flex-col items-center justify-center gap-l p-3xl">
                <Text as="p" className="text-center text-l font-bold text-secondaryDark" text={title} />
                <FlexLayout className="flex-wrap justify-center gap-l">
                    {items.map(({ icon, label }) => (
                        <Tooltip key={label} title={label}>
                            <div key={label}>
                                <NextImage alt={label} height={48} src={`/icons/${icon}.svg`} width={48} />
                            </div>
                        </Tooltip>
                    ))}
                </FlexLayout>
            </FlexLayout>
        </div>
    );
};

export default TechnologyGroup;
