import styled from 'styled-components';
import _ from 'lodash';
import { urlForImage } from '../lib/sanity';

export default function BlogCard({ post }): JSX.Element {
  return (
    <Wrapper bgimage={urlForImage(post.mainImage)}>
      <span className='chip-white'></span>
      <div className='content'>
        <h3 className='text-white'> {post.title} </h3>

        <div className='card-footer'>
          <div className='postedBy'>
            <div className='user-profile'>
              <img src='..' alt='...' className='user-img' />
            </div>
            <div>
              <p className='text-white'>Sharon Manisa</p>
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
  background: ${({ bgimage }) =>
    bgimage &&
    `linear-gradient(
      to top,
      rgb(0 10 20) 0%, rgb(0 0 0 / 0%) 100% ), url(${bgimage})`};
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding: 18px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: grayscale(100%);
  }

  .card-footer {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
