import Link from 'components/common/Link';
import Section from 'components/common/Section';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';

const Footer: React.FC = () => {
    return (
        <Section as="footer" className="bg-secondary py-0 md:py-2xl" padding="2xl">
            <FlexLayout className="flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-between">
                <Text className="w-full text-center">
                    &copy; {new Date().getFullYear()}. All Rights Reserved. Built with Next.js by{' '}
                    <Link className="cursor-pointer" href="https://github.com/iamcedd01" target="_blank">
                        <Text className="font-extrabold">
                            Cedric <Text className="font-bold text-primaryLight" text="Estrada" />
                        </Text>
                    </Link>
                    .
                </Text>
            </FlexLayout>
        </Section>
    );
};

export default Footer;
