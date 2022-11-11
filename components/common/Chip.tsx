import clsx from 'clsx';

import { ICommonProps } from 'types/globals';

import Text from './Text';

interface IChipProps extends ICommonProps {
    size?: 'medium' | 'small';
    text: string;
}

const Chip: React.FC<IChipProps> = ({ className, size = 'medium', text }) => (
    <div
        className={clsx(
            'inline-flex max-w-full items-center justify-center rounded-full border border-general text-center',
            {
                ['md:min-h-6 px-s text-[0.625rem]']: size === 'small',
                ['md:min-h-8 px-3 text-[0.875rem]']: size === 'medium',
            },
            className
        )}
    >
        {text && <Text as="span" text={text} />}
    </div>
);

export default Chip;
