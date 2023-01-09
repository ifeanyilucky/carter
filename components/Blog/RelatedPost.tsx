import client from '../../client';

export default function RelatedPost({ posts }) {
  console.log(posts);
  return (
    <div>
      <h4>More from </h4>
      <h2>Carter's Library</h2>
      <p>The latest from all our amazing libraries in Carter</p>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = await client.fetch(`*[_type == "post"]`);
  console.log(query);
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
