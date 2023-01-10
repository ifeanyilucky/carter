import { NextPage } from 'next';
import LibraryHero from '../../Layout/LibraryHero';
import styled from 'styled-components';
import client from '../../client';
import BlogpostSection from '../../components/Home/BLogpostSection';

const Artist: NextPage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <LibraryHero title={'Artist'} description='This is an Artist lirbary' />
      <BlogpostSection posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const query = await client.fetch(
    `*[_type == "post" &&  "Artist" in categories[]->title ]`
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
export default Artist;
