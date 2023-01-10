import Head from 'next/head';

export default function Page({ title }) {
  return (
    <>
      <Head>
        <title>
          {title || 'A free speech platform for art ideas.'} - Carter Rose
        </title>
      </Head>
    </>
  );
}
