import { ComponentType, useEffect, useMemo, useRef, useState } from 'react';

import cx from 'clsx';

import Link from 'components/common/Link';
import Section from 'components/common/Section';
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
            className={cx('fixed top-0 left-0 h-[unset] transition-all duration-700', {
                'bg-white': sticky,
            })}
            name="header"
            ref={headerOffset}
            wrapperClassName={cx('transition-all duration-700', { 'py-m': sticky })}
        >
            <FlexLayout className="justify-between items-center">
                <Link
                    className={cx('text-l font-bold capitalize tracking-widest', {
                        'text-black': sticky,
                        'text-white': !sticky,
                    })}
                    href="/"
                    name="brand"
                >
                    Cedd
                </Link>

                <nav data-cy="nav">
                    <ul className="items-center flex gap-m">
                        {routes.map(({ label }) => (
                            <li key={label}>
                                <Link
                                    className={cx('text-m font-bold capitalize', {
                                        'text-black': sticky,
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
