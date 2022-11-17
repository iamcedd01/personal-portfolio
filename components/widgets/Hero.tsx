import NextImage from 'next/image';

import Button from 'components/common/Button';
import Text from 'components/common/Text';
import Typed from 'components/common/Typed';
import { FlexLayout } from 'components/layouts/content';

const Hero: React.FC = () => {
    return (
        <FlexLayout className="flex-col-reverse justify-between gap-l md:flex-row md:gap-2xl">
            <FlexLayout className="flex-col justify-center gap-none md:w-3/4">
                <Text className="font-bold leading-tight md:text-l" text="Hey There!" />
                <Text className="text-[26px] leading-tight tracking-wider md:text-2xl">
                    I am <Typed values={['Cedric Estrada', 'Fullstack Developer', 'Freelancer']} />
                </Text>
                <Text
                    className="py-m text-justify"
                    text="A professional software engineer with more than four years of experience. If you're looking for a full-stack developer to build your applications and grow your business, you've found what you need. Let's Work Together!"
                />
                <Button className="w-full md:w-max" text="Contact Me" />
            </FlexLayout>
            <div className="flex justify-center">
                <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border-8 border-solid border-secondaryLight sm:h-60 sm:w-60 md:h-[420px] md:w-[420px]">
                    <NextImage layout="fill" objectFit="cover" src="/images/me.png" />
                </div>
            </div>
        </FlexLayout>
    );
};

export default Hero;
