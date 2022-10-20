import Section from 'components/common/Section';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import Profile from 'components/widgets/Profile';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <>
            <Section className="min-h-[100vh] bg-secondaryDark">
                <Profile />
            </Section>
        </>
    );
};

export default Home;

Home.getLayout = page => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
