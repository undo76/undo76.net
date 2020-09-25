import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>@undo76</title>
                    <meta
                        name="description"
                        content="Personal site of Manolo Santos (@undo76). Software engineer, full-stack development, Machine learning."
                    />
                    <link
                        rel="preload"
                        href="https://rsms.me/inter/inter.css"
                        as="style"
                    />
                    <link
                        rel="stylesheet"
                        href="https://rsms.me/inter/inter.css"
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
