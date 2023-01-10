import { NextPage } from 'next';
import styled from 'styled-components';
import Page from '../components/Page';

const SubmitYourIdeas: NextPage = () => {
  return (
    <Wrapper>
      <Page title='Submit your idea' />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='display-2'>
              Let us help you make the world{' '}
              <span style={{ color: '#0d3b66' }}>listen</span>
            </h1>
            <p className='text-muted'>
              Send us an email and let us get your story to the world.
            </p>
          </div>
        </div>
        <div className='submit-img-container'>
          <img src='/images/submit-banner.png' alt='Submit-ideas' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row {
    max-width: 768px;
  }
  .submit-img-container {
    margin: 4rem 0;
    img {
      width: 100%;
    }
  }
`;

export default SubmitYourIdeas;
