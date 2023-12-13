import Head from 'next/head';

export default function Title({ title }) {
  return (
    <Head>
      <title>{`${title} - Bits and Bytes Association`}</title>
    </Head>
  );
}
