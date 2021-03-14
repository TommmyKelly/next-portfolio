import "../styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app__global">
      <div className="app__container">
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossOrigin='anonymous'
        />
      </Head>
      <main className="app__main">
        <header className="app__header home">
          <nav >

          </nav>
        </header>
      <Component {...pageProps} />
        <footer className="app__footer home">

        </footer>
      </main>
      </div>
    </div>
  );
}

export default App;
