import styled from 'styled-components';
import { ImageSpiral } from '../icons';

export default function Experience(): JSX.Element {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='contentWrapper'>
              <ImageSpiral />
              <h2>Experience remorse writing at its amazing peak.</h2>
              <p>
                At its heart, Empty Carafes seeks to share the ideas and the
                voices of those that help us deepen our understanding of the
                world.
              </p>
              <button className='primary-btn'>Get Started</button>
            </div>
          </div>
          <div className='col-6'>
            <div className='frameWrapper'>
              <img src='images/Frame.png' alt='Frame' className='frame-img' />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin: 5rem 0;
  .container {
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;

      .col-6 {
        flex: 0 0 50%;
        max-width: 50%;
        .contentWrapper {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
        }
      }
    }
  }
  .frameWrapper {
    display: block;
    .frame-img {
      width: 90%;
    }
  }
`;
