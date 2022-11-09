import styled from 'styled-components';
import Link from 'next/link';
import BlogCard from '../blogCard';
import client from '../../client';
import { imageBuilder } from '../../lib/sanity';

export default function BlogpostSection({ posts }) {
  return (
    <Wrapper className='container'>
      <div className='my-5'>
        <div className='post-row'>
          {posts?.slice(0, 8)?.map((post, index) => (
            <div className='post-item' key={index}>
              <Link href={post.slug.current}>
                <BlogCard post={post} />
              </Link>{' '}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .post-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: 1fr 1fr auto; */
    align-items: center;
    gap: 15px;
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      .post-item {
        grid-column: span 2;
      }
    }
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .post-item {
    &:first-child {
      grid-column: span 2;
    }
    &:nth-child(2) {
    }
  }
`;
