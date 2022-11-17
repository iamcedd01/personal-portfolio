import clsx from 'clsx';

import { FlexLayout } from 'components/layouts/content';
import Social from 'components/widgets/Social';
import { useAppContext } from 'context/AppContext';

import HeaderNav from './HeaderNav';
import Logo from './Logo';

const HeaderDrawer: React.FC = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useAppContext();

    return (
        <>
            <div
                className={clsx('absolute top-0 left-0 h-screen w-screen bg-secondaryDark bg-opacity-40', {
                    ['hidden']: !isDrawerOpen,
                })}
                onClick={() => setIsDrawerOpen(false)}
            />
            <div
                className={clsx(
                    'absolute top-0 h-screen w-2/3 bg-generalLight p-m transition-all duration-300 sm:w-1/2',
                    {
                        '-left-2/3': !isDrawerOpen,
                        'left-0': isDrawerOpen,
                    }
                )}
            >
                <FlexLayout className="h-full flex-col gap-m">
                    <Logo className="text-l" />
                    <div className="h-[1px] bg-general" />
                    <HeaderNav className="flex-start flex-col items-baseline !gap-s" />
                    <div className="h-[1px] bg-general" />
                    <Social className="justify-center" iconSize={24} />
                </FlexLayout>
            </div>
        </>
    );
};

export default HeaderDrawer;
