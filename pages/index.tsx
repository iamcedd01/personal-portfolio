import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import About from 'components/widgets/About';
import LineDivider from 'components/widgets/divider/section/Line';
import WaveDivider from 'components/widgets/divider/section/Wave';
import Profile from 'components/widgets/Profile';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Section className="min-h-screen bg-secondaryDark">
                <Profile />
            </Section>
            <WaveDivider />
            <Section className="bg-secondary">
                <About />
            </Section>
            <LineDivider />
            <Section className="bg-generalLight"></Section>
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
