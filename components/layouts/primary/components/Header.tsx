import { useEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';

import Section from 'components/common/Section';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

interface IRoute {
    href: string;
    label: string;
}

const Header: React.FC = () => {
    const headerOffset = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState<boolean>(false);

    const routes = useMemo(
        (): IRoute[] => [
            { href: 'hero', label: 'Home' },
            { href: 'about', label: 'About' },
            { href: 'skills', label: 'Skills' },
            { href: 'experience', label: 'Experience' },
            { href: 'contact', label: 'Contact' },
        ],
        []
    );

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
                <ScrollLink
                    className="w-full cursor-pointer text-l capitalize tracking-widest"
                    duration={500}
                    name="brand"
                    smooth
                    to="hero"
                >
                    <Text
                        className={clsx('font-extrabold', {
                            'text-secondaryDark': sticky,
                            'text-white': !sticky,
                        })}
                    >
                        Cedd <Text className="font-bold  text-primaryLight" text="Estrada" />
                    </Text>
                </ScrollLink>

                <nav data-cy="nav">
                    <ul className="flex items-center gap-xl">
                        {routes.map(({ href, label }) => (
                            <li key={label}>
                                <ScrollLink
                                    activeClass="text-primary"
                                    className={clsx(
                                        'cursor-pointer text-m font-bold capitalize hover:text-primary active:text-primary',
                                        {
                                            'text-secondaryDark': sticky,
                                            'text-white': !sticky,
                                        }
                                    )}
                                    duration={500}
                                    name={label.toLowerCase()}
                                    offset={-80}
                                    smooth
                                    spy
                                    to={href}
                                >
                                    {label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </FlexLayout>
        </Section>
    );
};

export default Header;
