import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';

import Section from 'components/common/Section';
import { FlexLayout } from 'components/layouts/content';
import { useAppContext } from 'context/AppContext';

import HeaderDrawer from './components/HeaderDrawer';
import HeaderNav from './components/HeaderNav';
import Logo from './components/Logo';

const Header: React.FC = () => {
    const { isDrawerOpen, isMobile, setIsDrawerOpen } = useAppContext();

    const headerOffset = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerOffset.current) {
                const value = headerOffset.current.clientHeight;

                setSticky(window.scrollY >= value);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Section
            as="header"
            className={clsx('fixed top-0 left-0 z-10 h-[unset] transition-all duration-300', {
                'bg-generalLight shadow-md': sticky,
            })}
            name="header"
            padding={sticky ? 'm' : '2xl'}
            ref={headerOffset}
            wrapperClassName="transition-all duration-300"
        >
            <FlexLayout className="items-center justify-between">
                <div>
                    <ScrollLink
                        className="w-full cursor-pointer text-l capitalize tracking-widest"
                        duration={500}
                        name="brand"
                        smooth
                        to="hero"
                    >
                        <Logo className={!sticky ? 'text-white' : ''} />
                    </ScrollLink>
                </div>
                {isMobile ? (
                    <AiOutlineMenu
                        className="cursor-pointer text-primaryLight"
                        onClick={() => setIsDrawerOpen(true)}
                        size="1.75rem"
                    />
                ) : (
                    <HeaderNav isSticky={sticky} />
                )}
            </FlexLayout>
            <HeaderDrawer />
        </Section>
    );
};

export default Header;
