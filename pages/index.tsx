import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Section className=" bg-black h-screen"></Section>
            <Section className="h-screen bg-slate-400"></Section>
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
