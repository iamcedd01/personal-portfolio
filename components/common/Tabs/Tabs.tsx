import { useCallback } from 'react';

import clsx from 'clsx';

import { ICommonProps } from 'types/globals';

import Text from '../Text';

interface ITabItem {
    label?: string;
}

interface ITabsProps extends ICommonProps {
    activeIndex?: number;
    onChangeTab?: (index: number) => void;
    tabItems?: ITabItem[];
}

const Tabs: React.FC<ITabsProps> = ({ activeIndex = 0, onChangeTab, tabItems }) => {
    const handleChangeTab = useCallback((currentIndex: number) => onChangeTab?.(currentIndex), [onChangeTab]);

    return (
        <div aria-label="tabs" className="flex flex-col gap-l" role="tabs">
            <div className="mx-auto grid w-max grid-cols-3 items-center overflow-hidden rounded shadow-md">
                {tabItems?.map(({ label }, index) => (
                    <div
                        className={clsx(
                            'box-border cursor-pointer border-b-4 border-b-[transparent] py-m px-l text-center hover:border-b-primaryLight not-last:border-r not-last:border-solid not-last:border-r-general',
                            {
                                ['!border-b-primary']: activeIndex === index,
                            }
                        )}
                        key={index}
                        onClick={() => handleChangeTab(index)}
                        role="tab"
                        tabIndex={index}
                    >
                        <Text className="text-secondaryDark" text={label} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
