import { Fira_Sans } from '@next/font/google';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import footerLinks from '@/data/footer-links.json';

import '@/styles/globals.css';

const firaSans = Fira_Sans({
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bits and Bytes Association</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="description"
          name="description"
          content="Explore the dynamic tech community of the Bits and Bytes Association (BBA) at Red River College Polytechnic. Established in 2015, the BBA enhances communication within the ACE department, fostering a vibrant community of over 150 members. Join us for inclusive events, industry connections, and a commitment to high-quality education."
        />
        <meta key="theme-color" name="theme-color" content="#ffffff" />
        <meta
          key="og:url"
          property="og:url"
          content="https://bitsandbytesassociation.ca/"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content="Bits and Bytes Association"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Explore the dynamic tech community of the Bits and Bytes Association (BBA) at Red River College Polytechnic. Established in 2015, the BBA enhances communication within the ACE department, fostering a vibrant community of over 150 members. Join us for inclusive events, industry connections, and a commitment to high-quality education."
        />
        <meta
          key="og:image"
          property="og:image"
          content="/images/og-logo.png"
        />
      </Head>
      <div
        className={`${firaSans.variable} flex flex-col font-sans text-xl text-neutral-600`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main>
            <Component className="flex-grow" {...pageProps} />
          </main>
        </div>
        <Footer data={footerLinks} />
      </div>
    </>
  );
}
