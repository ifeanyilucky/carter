import styled from 'styled-components';

export default function LibraryHero({ title, description }) {
  return (
    <Wrapper>
      <div className='container'>
        <h3 className='display-2'>{title}</h3>
        <p className='text-muted'>{description}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #dbefe4;
  height: 350px;
  display: flex;
  align-items: center;
  text-align: center;
  h3 {
    margin-bottom: 1.6rem;
  }
`;
