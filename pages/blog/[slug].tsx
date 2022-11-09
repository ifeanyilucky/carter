import client from '../../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../lib/sanity';
import Header from '../../components/Blog/Header';
import PostBody from '../../components/Blog/PostBody';

export default function Post({ post }) {
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
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
