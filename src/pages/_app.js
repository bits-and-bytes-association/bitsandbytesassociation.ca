import '@/styles/globals.css';
import { Fira_Sans, Work_Sans } from '@next/font/google';

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
      <Component {...pageProps} />
    </>
  );
}
