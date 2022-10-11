import NextHead from 'next/head';

import { FlexLayout } from 'components/layouts/content';

import Header from './components/Header';

export interface IPrimaryLayoutProps {
    title?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({ children, title }) => {
    return (
        <FlexLayout className="flex-col">
            <NextHead>
                <title>{title}</title>
            </NextHead>
            <Header />
            <main>{children}</main>
        </FlexLayout>
    );
};

export default PrimaryLayout;
