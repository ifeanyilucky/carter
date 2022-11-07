import Link from 'next/link';
import styled from 'styled-components';
import { urlForImage } from '../lib/sanity';

export default function BlogCard({ post }): JSX.Element {
  return (
    <Wrapper bgimage={urlForImage(post.mainImage)}>
      <span className='chip-white'></span>
      <div className='content'>
        <Link href={post.slug.current} className='text-white link'>
          <h3> {post.title} </h3>
        </Link>
        <div className='card-footer'>
          <div className='postedBy'>
            <div className='user-profile'>
              <img alt='...' className='user-img' />
            </div>
            <div>
              <p className='text-white'>Viola Manisa</p>
              <p className='text-muted'>Verified writer</p>
            </div>
          </div>
          <p className='text-muted'>02 May</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: ${(props) =>
    props.bgimage &&
    `linear-gradient(
      to top,
      rgb(0 10 20) 0%, rgb(0 0 0 / 0%) 100% ), url(${props.bgimage})`};
  height: 400px;
  width: 350px;
  padding: 18px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-footer {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
