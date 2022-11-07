import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BlogpostSection from '../components/Home/BLogpostSection';
import Hero from '../components/Home/Hero';
import PlatformFor from '../components/Home/PlatformFor';
import client from '../client';
import groq from 'groq';

const Home: NextPage = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <Hero posts={posts} />
      <PlatformFor />
      <BlogpostSection posts={posts} />
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
