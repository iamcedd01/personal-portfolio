import { useMemo } from 'react';

import NextImage from 'next/image';

import Link from 'components/common/Link';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

interface IContactItemProps {
    id: string;
    url?: string;
    value: string;
}

const ContactItem: React.FC<IContactItemProps> = ({ id, url, value }) => {
    const urlPrefix = useMemo((): string => (id === 'phone' ? 'tel:' : id === 'email' ? 'mailto:' : ''), [id]);
    const target = useMemo((): string => (!urlPrefix ? '_blank' : ''), [urlPrefix]);

    return (
        <Link className="w-max" href={`${urlPrefix}${url || value}`} target={target}>
            <FlexLayout className="w-max gap-s">
                <NextImage height={20} src={`/icons/${id}.svg`} width={20} />
                <Text className="font-bold text-secondaryDark" text={value} />
            </FlexLayout>
        </Link>
    );
};

export default ContactItem;
