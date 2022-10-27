import { useMemo } from 'react';

import NextImage from 'next/image';

import Button from 'components/common/Button';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

const About: React.FC = () => {
    const summaries = useMemo(
        () => [
            { label: 'Years of Development Experience', value: '4+' },
            { label: 'Years of Leading Experience', value: '2' },
            { label: 'Projects Handled', value: '20+' },
        ],
        []
    );

    return (
        <FlexLayout className="gap-2xl">
            <div className="w-2/3">
                <div className="relative max-h-max min-h-[400px] w-full">
                    <NextImage layout="fill" objectFit="contain" src="/images/developer.svg" />
                </div>
            </div>
            <FlexLayout className="flex-col justify-center gap-s">
                <Text as="h1" className="text-primaryLight" text="About Me" />
                <Text
                    as="p"
                    className="text-justify leading-relaxed"
                    text="Results-driven and motivated Full-stack developer with demonstrated experience in team leadership, improving software performance and functionality, developing and implementing innovative software solutions to boost business productivity, and creating technical documentation and architectures. I also participated in testing, debugging, and implementing system upgrades."
                />
                <FlexLayout className="my-l items-center gap-m">
                    {summaries.map(({ label, value }, index) => (
                        <FlexLayout className="flex-col gap-xs" key={index}>
                            {value && <Text className="text-center text-xl font-bold" text={value} />}
                            <Text className="text-center text-m font-bold text-general" text={label} />
                        </FlexLayout>
                    ))}
                </FlexLayout>
                <FlexLayout className="justify-center gap-xl">
                    <Button outlined text="Learn More About Me" />
                    <Button text="Download CV" />
                </FlexLayout>
            </FlexLayout>
        </FlexLayout>
    );
};

export default About;
