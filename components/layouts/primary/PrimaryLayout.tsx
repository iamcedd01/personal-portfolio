import { useEffect } from 'react';

import NextHead from 'next/head';

import { FlexLayout } from 'components/layouts/content';
import { useAppContext } from 'context/AppContext';

import Footer from './components/Footer';
import Header from './components/Header';

export interface IPrimaryLayoutProps {
    title?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({ children, title }) => {
    const { isDrawerOpen } = useAppContext();

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isDrawerOpen]);

    return (
        <FlexLayout className="flex-col">
            <NextHead>
                <title>{title}</title>
            </NextHead>
            <Header />
            <main>{children}</main>
            <Footer />
        </FlexLayout>
    );
};

export default PrimaryLayout;
