import Document, { Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"></link>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="icon" href="/favicon.png"/>
                    <link rel="shortcut icon" href="/icon-128x128.png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}