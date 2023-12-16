import Head from 'next/head';

export default function PageTitle({ title }) {
  return (
    <>
      <Head>
        <title>{`${title} - Bits and Bytes Association`}</title>
      </Head>
      <h1 className="mb-6 cursor-default text-5xl font-black text-neutral-900">
        {title}
      </h1>
    </>
  );
}
