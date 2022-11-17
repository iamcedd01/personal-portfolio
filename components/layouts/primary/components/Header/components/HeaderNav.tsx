import { useCallback, useMemo } from 'react';

import clsx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';

import { useAppContext } from 'context/AppContext';
import { ICommonProps } from 'types/globals';

interface IRoute {
    href: string;
    label: string;
}

interface IHeaderNavProps extends ICommonProps {
    isSticky?: boolean;
}

const HeaderNav: React.FC<IHeaderNavProps> = ({ className, isSticky }) => {
    const { isMobile, setIsDrawerOpen } = useAppContext();

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

    const handleClick = useCallback(() => {
        if (isMobile) {
            setIsDrawerOpen(false);
        }
    }, [isMobile, setIsDrawerOpen]);

    return (
        <nav data-cy="nav">
            <ul className={clsx('flex items-center gap-xl', className)}>
                {routes.map(({ href, label }) => (
                    <li
                        className={clsx({
                            'py-s': isMobile,
                        })}
                        key={label}
                    >
                        <ScrollLink
                            activeClass="text-primary"
                            className={clsx(
                                'cursor-pointer text-m font-bold uppercase hover:text-primary active:text-primary',
                                {
                                    'text-secondaryDark': isSticky || isMobile,
                                    'text-white': !isSticky && !isMobile,
                                }
                            )}
                            duration={500}
                            name={label.toLowerCase()}
                            offset={-50}
                            onClick={handleClick}
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
    );
};

export default HeaderNav;
