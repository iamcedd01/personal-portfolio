import NextImage from 'next/image';

import Button from 'components/common/Button';
import Text from 'components/common/Text';
import Typed from 'components/common/Typed';
import { FlexLayout } from 'components/layouts/content';

const Profile: React.FC = () => {
    return (
        <FlexLayout className="flex-col-reverse justify-between gap-2xl lg:flex-row xl:flex-row 2xl:flex-row">
            <FlexLayout className="w-3/4 flex-col justify-center gap-none">
                <Text className="text-l font-bold leading-tight" text="Hey There!" />
                <Text className="text-2xl leading-tight tracking-wider">
                    I am <Typed values={['Cedric Estrada', 'Fullstack Developer', 'Freelancer']} />
                </Text>
                <Text
                    className="py-m text-justify"
                    text="A professional software engineer with more than four years of experience. If you're looking for a full-stack developer to build your applications and grow your business, you've found what you need. Let's Work Together!"
                />
                <div>
                    <Button text="Contact Me" />
                </div>
            </FlexLayout>
            <div className="flex justify-center">
                <div className="relative flex items-center justify-center overflow-hidden rounded-full border-8 border-solid border-secondaryLight md:h-[420px] md:w-[420px]">
                    <NextImage layout="fill" objectFit="cover" src="/images/me.png" />
                </div>
            </div>
        </FlexLayout>
    );
};

export default Profile;
