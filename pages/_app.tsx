import '../styles/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>undo76 :: Manolo Santos</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
