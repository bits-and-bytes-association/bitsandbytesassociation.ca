import { Fira_Sans, Work_Sans } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
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
        <meta
          name="description"
          content="The Bits and Bytes Association is a student group created to bring together students and staff of programs offered in the ACE Department at Red River College. Our goal is to promote communication between students, staff, and industry professionals, as well as provide additional tech-related opportunities to students."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${firaSans.variable} flex flex-col font-sans text-xl text-neutral-500`}
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
