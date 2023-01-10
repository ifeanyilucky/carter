import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BlogpostSection from '../components/Home/BLogpostSection';
import Hero from '../components/Home/Hero';
import PlatformFor from '../components/Home/PlatformFor';
import client from '../client';
import Experience from '../components/Home/Experience';
import Page from '../components/Page';

const Home: NextPage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Page />
      <Hero posts={posts} />
      <PlatformFor />
      <BlogpostSection posts={posts} />
      <Experience />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const query = await client.fetch(`*[_type == "post"]`);

  if (!query.length || !query) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: query,
      },
    };
  }
};
