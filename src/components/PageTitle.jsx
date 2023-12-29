import Head from 'next/head';

export default function PageTitle({ title }) {
  return (
    <>
      <Head>
        <title>{`${title} - Bits and Bytes Association`}</title>
        <meta
          property="og:title"
          content={`${title} - Bits and Bytes Association`}
        ></meta>
      </Head>
      <h1 className="mb-6 text-5xl font-black text-neutral-900">{title}</h1>
    </>
  );
}
