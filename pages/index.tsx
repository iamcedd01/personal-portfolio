import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import About from 'components/widgets/About';
import DiagonalDivider from 'components/widgets/divider/section/Diagonal';
import LineDivider from 'components/widgets/divider/section/Line';
import WaveDivider from 'components/widgets/divider/section/Wave';
import Experience from 'components/widgets/Experience';
import Profile from 'components/widgets/Profile';
import Technologies from 'components/widgets/Technologies';

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
            <Section className="bg-generalLight">
                <Technologies />
            </Section>
            <DiagonalDivider />
            <Section className="bg-secondaryDark">
                <Experience />
            </Section>
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
