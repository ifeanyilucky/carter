import Link from 'next/link';
import styled from 'styled-components';
import { BackgroundSpiral } from '../components/icons';

export default function Footer() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='footerRow'>
          <img
            src='/images/footer/streamline.svg'
            alt='streamline'
            className='streamline'
          />
          <div className='footerCol'>
            <h2 className='display-4'>The Art Blog</h2>
            <div className='item__row'>
              <div className='item-col'>
                <p>Library</p>

                <Link className='footer-item' href='/library/artist'>
                  Artist
                </Link>

                <Link className='footer-item' href='/library/technology'>
                  Tech
                </Link>

                <p className='text-muted'>Copyright &copy; 2023 Carter Rose</p>
                <p className='text-muted'>Made with 💚 by Codack</p>
              </div>
              <div className='item-col'>
                <p>Company</p>
                <div className='footer-item'>About us</div>
                <div className='footer-item'>Contact us</div>
              </div>
            </div>
          </div>
          <div className='footerCol'>
            <h1 className='display-2'>Carter.</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: #0d3b66;
  color: #fff !important;
  h1,
  h2 {
    color: #fff !important;
  }
  padding: 5rem 0;
  .footerRow {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 786px) {
      flex-flow: column-reverse;
    }
    .footerCol {
      position: relative;

      .item__row {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        .item-col {
          color: #fff !important;
          p {
            font-weight: 400;
          }
          .footer-item {
            color: white;
          }
        }
      }
    }
  }
  .streamline {
    display: block;
    bottom: 0px;
    width: 45%;
    height: 100%;
    position: absolute;
    left: 80px;
    z-index: 999;
  }
`;
