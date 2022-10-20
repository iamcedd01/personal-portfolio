import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com" rel="preconnect" />
                    <link href="https://fonts.gstatic.com" rel="preconnect" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
