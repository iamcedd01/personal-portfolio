import { ComponentType, useEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';

import Link from 'components/common/Link';
import Section from 'components/common/Section';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

interface IRoute {
    icon?: ComponentType;
    label: string;
}

const Header: React.FC = () => {
    const headerOffset = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState<boolean>(false);

    const routes = useMemo(
        (): IRoute[] => [
            { label: 'Home' },
            { label: 'About' },
            { label: 'Service' },
            { label: 'Portfolio' },
            { label: 'Resume' },
            { label: 'Contact' },
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
                'bg-white': sticky,
            })}
            name="header"
            padding={sticky ? 'm' : '2xl'}
            ref={headerOffset}
            wrapperClassName="transition-all duration-300"
        >
            <FlexLayout className="items-center justify-between">
                <Link className="text-l capitalize tracking-widest" href="/" name="brand">
                    <Text
                        className={clsx('font-extrabold', {
                            'text-secondaryDark': sticky,
                            'text-white': !sticky,
                        })}
                        text="Cedd"
                    />{' '}
                    <Text className="font-bold  text-primaryLight" text="Estrada" />
                </Link>

                <nav data-cy="nav">
                    <ul className="flex items-center gap-xl">
                        {routes.map(({ label }) => (
                            <li key={label}>
                                <Link
                                    className={clsx('text-m font-bold capitalize', {
                                        'text-secondaryDark': sticky,
                                        'text-white': !sticky,
                                    })}
                                    href="/"
                                    name={label.toLowerCase()}
                                    onClick={() => console.log(label)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </FlexLayout>
        </Section>
    );
};

export default Header;
