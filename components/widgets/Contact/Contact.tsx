import { useMemo } from 'react';

import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

import ContactItem from './ContactItem';

const Contact: React.FC = () => {
    const contacts = useMemo(
        () => [
            { id: 'phone', value: '+639171402480' },
            { id: 'email', value: 'ecedd2018@gmail.com' },
            {
                id: 'address',
                url: 'https://www.google.com/maps/place/Salawag,+Dasmari%C3%B1as,+Cavite/@14.3414944,120.966288,14z/data=!3m1!4b1!4m5!3m4!1s0x3397d4202af95fbb:0x9281647cdf10570f!8m2!3d14.3406895!4d120.9825461',
                value: 'Salawag, Dasmariñas City, Cavite PH 4114',
            },
        ],
        []
    );

    const socials = useMemo(
        () => [
            { id: 'github', url: 'https://github.com/iamcedd01', value: '@iamcedd01' },
            { id: 'linkedin', url: 'https://www.linkedin.com/in/cedricestrada/', value: '@cedricestrada' },
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
                {contacts.map(item => {
                    return <ContactItem key={item.id} {...item} />;
                })}
            </FlexLayout>
            <FlexLayout className="flex flex-wrap justify-center gap-m">
                {socials.map(item => (
                    <ContactItem key={item.id} {...item} />
                ))}
            </FlexLayout>
        </FlexLayout>
    );
};

export default Contact;
