import styled from 'styled-components';
import { urlForImage } from '../../lib/sanity';

export default function Header({ title, image, authorName, authorImage }) {
  return (
    <Wrapper>
      <div className='container'>
        <div className='blog-title'>
          <h1>{title}</h1>
          <div className='postedBy'>
            <div className='user-profile'>
              <img
                src={urlForImage(authorImage)}
                alt='..'
                className='user-img'
              />
            </div>
            <p>{authorName}</p>
          </div>
        </div>
      </div>
      <div className='blog__img'>
        <img src={urlForImage(image)} alt={title} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-title {
    width: 640px;
    margin: 0 auto;
    .postedBy {
      margin: 3em 0;
    }
    h1 {
      margin: 0;
      line-height: 1;
    }
  }
  .blog__img {
    margin: 2em 0;
    border-radius: 10px;
    width: 100%;
    height: 400px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
