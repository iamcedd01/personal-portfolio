import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import useValueAndKey from 'lib/hooks/useValueAndKey';
import { ICommonProps } from 'types/globals';

type ILinkProps = NextLinkProps & ICommonProps & Omit<React.HTMLProps<HTMLAnchorElement>, 'href' | 'name'>;

const Link: React.FC<ILinkProps> = ({ children, href, name, ...props }) => {
    return (
        <NextLink href={href}>
            <a data-cy={useValueAndKey(name, 'link')} {...props}>
                {children}
            </a>
        </NextLink>
    );
};

export default Link;
