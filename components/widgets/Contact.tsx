import { useMemo } from 'react';

import NextImage from 'next/image';

import Link from 'components/common/Link';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

import Social from './Social';

const Contact: React.FC = () => {
    const contacts = useMemo(
        () => [
            { id: 'phone', value: '+639171402480' },
            { id: 'email', value: 'iamcedd01@gmail.com' },
            {
                id: 'address',
                url: 'https://www.google.com/maps/place/Salawag,+Dasmari%C3%B1as,+Cavite/@14.3414944,120.966288,14z/data=!3m1!4b1!4m5!3m4!1s0x3397d4202af95fbb:0x9281647cdf10570f!8m2!3d14.3406895!4d120.9825461',
                value: 'Salawag, Dasmariñas City, Cavite PH 4114',
            },
        ],
        []
    );

    return (
        <FlexLayout className="flex-col gap-m">
            <Text as="h2" className="text-center text-secondaryDark" text="Get in Touch" />
            <Text
                as="p"
                className="text-center text-secondaryDark md:px-2xl lg:px-4xl"
                text="Hi there! Do you have an interesting project or opportunity that you think I can provide value? I am
            open for full time, part time and freelance work. Connect with me and let's talk about everything :)"
            />

            <FlexLayout className="flex flex-wrap justify-center gap-m">
                {contacts.map(({ id, url, value }) => {
                    const urlPrefix = id === 'phone' ? 'tel:' : id === 'email' ? 'mailto:' : '';
                    const target = !urlPrefix ? '_blank' : '';

                    return (
                        <Link className="w-max" href={`${urlPrefix}${url || value}`} key={id} target={target}>
                            <FlexLayout className="w-max gap-s">
                                <NextImage height={20} src={`/icons/${id}.svg`} width={20} />
                                <Text className="font-bold text-secondaryDark" text={value} />
                            </FlexLayout>
                        </Link>
                    );
                })}
            </FlexLayout>
            <Social className="justify-center" showLabel />
        </FlexLayout>
    );
};

export default Contact;
