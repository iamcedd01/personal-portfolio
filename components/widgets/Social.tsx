import { useMemo } from 'react';

import clsx from 'clsx';
import NextImage from 'next/image';

import Link from 'components/common/Link';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import { ICommonProps } from 'types/globals';

interface ISocialProps extends ICommonProps {
    iconSize?: number;
    orientation?: 'vertical';
    showLabel?: boolean;
}

const Social: React.FC<ISocialProps> = ({ className, iconSize = 20, orientation, showLabel }) => {
    const socials = useMemo(
        () => [
            { id: 'github', url: 'https://github.com/iamcedd01', value: '@iamcedd01' },
            { id: 'linkedin', url: 'https://www.linkedin.com/in/cedricestrada/', value: '@cedricestrada' },
        ],
        []
    );

    return (
        <FlexLayout
            className={clsx(
                'flex flex-wrap gap-m',
                {
                    ['flex-col']: orientation === 'vertical',
                },
                className
            )}
        >
            {socials.map(({ id, url, value }) => (
                <Link className="w-max" href={url} key={id} target="_blank">
                    <FlexLayout className="w-max gap-s">
                        <NextImage height={iconSize} src={`/icons/${id}.svg`} width={iconSize} />
                        {showLabel && <Text className="font-bold text-secondaryDark" text={value} />}
                    </FlexLayout>
                </Link>
            ))}
        </FlexLayout>
    );
};

export default Social;
