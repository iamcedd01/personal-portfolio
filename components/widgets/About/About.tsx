import NextImage from 'next/image';

import Button from 'components/common/Button';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import AboutSummary from 'components/widgets/about/components/AboutSummary';

const About: React.FC = () => {
    return (
        <FlexLayout>
            <div className="w-2/3">
                <div className="relative max-h-max min-h-[400px] w-full">
                    <NextImage layout="fill" objectFit="contain" src="/images/developer.svg" />
                </div>
            </div>
            <FlexLayout className="flex-col justify-center gap-s">
                <Text as="h1" className="text-primaryLight" text="About Me" />
                <Text
                    as="p"
                    className="text-justify"
                    text="Results-driven and motivated Full-stack developer with demonstrated experience in team leadership, improving software performance and functionality, developing and implementing innovative software solutions to boost business productivity, and creating technical documentation and architectures. I also participated in testing, debugging, and implementing system upgrades."
                />
                <FlexLayout className="my-l items-center gap-m">
                    <AboutSummary label="Years of Development Experience" value="4+" />
                    <AboutSummary label="Years of Leading Experience" value="2" />
                    <AboutSummary label="Projects Handled" value="20+" />
                </FlexLayout>
                <FlexLayout className="justify-center">
                    <Button outlined text="Learn More About Me" />
                    <Button text="Download CV" />
                </FlexLayout>
            </FlexLayout>
        </FlexLayout>
    );
};

export default About;
