import { useMemo } from 'react';

import NextImage from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

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
        <FlexLayout className="flex-col gap-m md:flex-row md:gap-2xl">
            <div className="w-full md:w-2/3">
                <div className="relative mx-auto h-48 w-48 md:max-h-max md:min-h-[400px] md:w-full">
                    <NextImage layout="fill" objectFit="contain" src="/images/developer.svg" />
                </div>
            </div>
            <FlexLayout className="flex-col justify-center gap-s">
                <Text as="h2" className="text-center text-primaryLight md:text-left" text="About Me" />
                <Text
                    as="p"
                    className="text-center leading-relaxed md:text-justify"
                    text="Results-driven and motivated Full-stack developer with demonstrated experience in team leadership, improving software performance and functionality, developing and implementing innovative software solutions to boost business productivity, and creating technical documentation and architectures. I also participated in testing, debugging, and implementing system upgrades."
                />
                <FlexLayout className="my-l items-center gap-m">
                    {summaries.map(({ label, value }, index) => (
                        <FlexLayout className="flex-col gap-xs" key={index}>
                            {value && <Text className="text-center text-l font-bold md:text-xl" text={value} />}
                            <Text className="text-center text-[12px] font-bold text-general md:text-m" text={label} />
                        </FlexLayout>
                    ))}
                </FlexLayout>
                <FlexLayout className="flex-col justify-center gap-xs sm:flex-row sm:gap-xl">
                    <ScrollLink duration={500} offset={-80} smooth to="experience">
                        <Button className="w-full md:w-auto" outlined text="Learn More About Me" />
                    </ScrollLink>
                    <Button className="w-full md:w-auto" text="Download CV" />
                </FlexLayout>
            </FlexLayout>
        </FlexLayout>
    );
};

export default About;
