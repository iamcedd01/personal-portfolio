import NextHead from 'next/head';

export interface IPrimaryLayoutProps {
    title?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({ children, title }) => {
    return (
        <>
            <NextHead>
                <title>{title}</title>
                <main>{children}</main>
            </NextHead>
        </>
    );
};

export default PrimaryLayout;
