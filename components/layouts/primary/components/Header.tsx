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
            className={clsx('fixed top-0 left-0 h-[unset] transition-all duration-700', {
                'bg-white': sticky,
            })}
            name="header"
            ref={headerOffset}
            wrapperClassName={clsx('transition-all duration-700', { 'py-m': sticky })}
        >
            <FlexLayout className="items-center justify-between">
                <Link className="text-l capitalize tracking-widest" href="/" name="brand">
                    <Text className="font-extrabold text-white" text="Cedd" />{' '}
                    <Text className="font-bold  text-primaryLight " text="Estrada" />
                </Link>

                <nav data-cy="nav">
                    <ul className="flex items-center gap-xl">
                        {routes.map(({ label }) => (
                            <li key={label}>
                                <Link
                                    className={clsx('text-m capitalize text-white', {})}
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
