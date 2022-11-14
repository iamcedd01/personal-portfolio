import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import About from 'components/widgets/About';
import Contact from 'components/widgets/Contact';
import SectionDivider from 'components/widgets/divider/section';
import Experience from 'components/widgets/Experience';
import Hero from 'components/widgets/Hero';
import Technologies from 'components/widgets/Technologies';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Section className="min-h-screen bg-secondaryDark" id="hero">
                <Hero />
            </Section>
            <SectionDivider className="relative bg-secondary" shape="Wave" />
            <Section className="bg-secondary" id="about">
                <About />
            </Section>
            <SectionDivider className="bg-secondary" shape="Line" />
            <Section className="bg-generalLight" id="skills">
                <Technologies />
            </Section>
            <SectionDivider className="bg-generalLight" shape="Diagonal" />
            <Section className="bg-secondaryDark pb-4xl" id="experience">
                <Experience />
            </Section>
            <SectionDivider className="bg-generalLight" shape="WaveOpacity" />
            <Section className="bg-generalLight py-4xl" id="contact">
                <Contact />
            </Section>
            <SectionDivider className="bg-secondary" shape="Triangle" />
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout title="Cedric Estrada - Fullstack Developer">{page}</PrimaryLayout>;
};
