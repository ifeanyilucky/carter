import styled from 'styled-components';
import BlogCard from '../blogCard';
import client from '../../client';
import { imageBuilder } from '../../lib/sanity';

export default function BlogpostSection({ posts }) {
  return (
    <Wrapper className='container'>
      <div className='my-5'>
        <div className='row'>
          {posts.map((post, index) => (
            <div className='col col-3' key={index}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .col-3 {
    flex-basis: 33.333333%;
  }
`;
