import type { AppProps } from 'next/app';
import NextHead from 'next/head';

import 'styles/globals.css';

import { NextPageWithLayout } from './page';

interface IAppProps extends AppProps {
    Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: IAppProps) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || (page => page);

    return (
        <>
            <NextHead>
                <title>Cedric Estrada - Fullstack Developer</title>
                <meta content="initial-scale=1, width=device-width" name="viewport" />
            </NextHead>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
}

export default MyApp;
