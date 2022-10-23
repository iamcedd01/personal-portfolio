import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import About from 'components/widgets/About/About';
import WaveDivider from 'components/widgets/divider/section/Wave';
import Profile from 'components/widgets/Profile';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Section className="min-h-screen bg-secondaryDark">
                <Profile />
            </Section>

            <Section className="relative bg-secondary" fullWidth padding="none">
                <WaveDivider className="rotate-180" />
            </Section>

            <Section className="relative bg-secondary">
                <About />
            </Section>
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
