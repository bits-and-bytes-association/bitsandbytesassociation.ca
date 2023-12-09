import { Fira_Sans, Work_Sans } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import footerLinks from '@/data/footer-links.json';
import '@/styles/globals.css';

const primaryFont = Fira_Sans({
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Work Sans is a variable type font, therefore we don't need to specify styles or weights
const secondaryFont = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-primary: ${primaryFont.style.fontFamily};
          --font-secondary: ${secondaryFont.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>Bits and Bytes Association: BBA</title>
        <meta
          name="description"
          content="The Bits and Bytes Association is a student group created to bring together students and staff of programs offered in the ACE Department at Red River College. Our goal is to promote communication between students, staff, and industry professionals, as well as provide additional tech-related opportunities to students."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="globalContainer">
        <Header />
        <div className="pageContainer">
          <Component {...pageProps} />
        </div>
        <Footer data={footerLinks} />
      </div>
    </>
  );
}
