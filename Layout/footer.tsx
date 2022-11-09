import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <div className='footerRow'>
        <div className='footerCol'>
          <h3>The Art Blog</h3>
          <div className='item-col'>
            <p>Library</p>
            <ul>
              <li>Artist</li>
              <li>Tech</li>
            </ul>
          </div>
        </div>
        <div className='footerCol'>
          <h2>Carter</h2>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 5rem 0;
  .footerRow {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    .footerCol {
    }
  }
`;
