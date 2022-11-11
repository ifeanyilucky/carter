import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CloseIcon } from '../components/icons';

interface ChildProps {
  onOPen: Boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({
  onOpen,
  setOpen,
}: ChildProps): JSX.Element {
  return (
    <Wrapper>
      <div className='nav__wrapper'>
        <div className='close' onClick={() => setOpen(false)}>
          <CloseIcon />
        </div>
        <ul>
          <li className='nav-item'>
            <Link className='nav__link' href='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav__link' href='/library'>
              Library
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav__link' href='/about-us'>
              About us
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav__link' href='/submit-your-idea'>
              Submit your ideas
            </Link>
          </li>
        </ul>{' '}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  height: 100%;
  width: 100%;
  .nav__wrapper {
    background-color: #fff;
    width: 250px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    border-top-left-radius: 50px;
    ul {
      list-style: none;
    }
  }
`;
