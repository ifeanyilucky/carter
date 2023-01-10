import { NextPage } from 'next';
import LibraryHero from '../../Layout/LibraryHero';
import styled from 'styled-components';
import client from '../../client';
import BlogpostSection from '../../components/Home/BLogpostSection';

const Technology: NextPage = ({ posts }) => {
  return (
    <>
      <LibraryHero
        title={'Technology'}
        description='This is a Technology lirbary'
      />
      <BlogpostSection posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const query = await client.fetch(
    `*[_type == "post" &&  "Technology" in categories[]->title ]`
  );

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

const Wrapper = styled.section``;
export default Technology;
