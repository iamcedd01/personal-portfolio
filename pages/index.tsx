import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import About from 'components/widgets/About';
import Contact from 'components/widgets/Contact/Contact';
import SectionDivider from 'components/widgets/divider/section';
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
            <SectionDivider className="relative bg-secondary" shape="Wave" />
            <Section className="bg-secondary">
                <About />
            </Section>
            <SectionDivider className="bg-secondary" shape="Line" />
            <Section className="bg-generalLight">
                <Technologies />
            </Section>
            <SectionDivider className="bg-generalLight" shape="Diagonal" />
            <Section className="bg-secondaryDark">
                <Experience />
            </Section>
            <SectionDivider className="bg-generalLight" shape="WaveOpacity" />
            <Section className="bg-generalLight">
                <Contact />
            </Section>
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
