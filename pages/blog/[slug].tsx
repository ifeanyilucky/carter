import client from '../../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { urlForImage } from '../../lib/sanity';
import Header from '../../components/Blog/Header';
import PostBody from '../../components/Blog/PostBody';
import { ParsedUrlQuery } from 'querystring';

export default function BlogPost({ post }: any) {
  console.log(post);

  return (
    <div className='container'>
      <Header
        title={post.title}
        image={post.mainImage}
        authorName={post.authorName}
        authorImage={post.authorImage}
      />
      <PostBody body={post.body} />
    </div>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    _createdAt,
    "authorName": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    body
  }`;
interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug = '' } = context.params as IParams;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
};
