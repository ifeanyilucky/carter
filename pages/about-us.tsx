import { NextPage } from 'next';
import styled from 'styled-components';
import Page from '../components/Page';

const About: NextPage = () => {
  return (
    <>
      <Page title='About' />
      <Wrapper>
        <div className='container'>
          <div className='header'>
            <h1 className='display-1'>About us</h1>
            <p className='text-muted'>
              Share ideas and deepen our understanding of the art world.
            </p>
          </div>
        </div>
        <div className='img-container'>
          <div className='img-wrapper'>
            <img
              src='https://images.pexels.com/photos/914922/pexels-photo-914922.jpeg'
              className='header-img'
            />
          </div>
        </div>
        <div className='container'>
          <div className='mission'>
            <div className='display-4'>A platform for art ideas</div>
            <p className='text-muted'>
              Carter blog is a content platform which allows readers to engage
              in a wide range of dynamic and innovative ideas expressed through
              different art forms.
            </p>
          </div>
          <div className='mission'>
            <div className='display-4'>An artist collective</div>
            <p className='text-muted'>
              A variety of both experts and ‘undiscovered’ artists delve into
              the heart of any subject; presenting novel ideas, unique
              perspectives, and sparking powerful conversations through the
              process.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .header {
    text-align: center;
  }
  .img-container {
    padding: 0.9rem 3rem;
  }
  .img-wrapper {
    max-width: 100%;
    width: 100%;
    height: 480px;
    border-radius: 18px;
    overflow: hidden;

    .header-img {
      overflow: hidden;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .mission {
    align-items: center;
    margin: 4rem 0;
    max-width: 30rem;
  }
`;

export default About;
