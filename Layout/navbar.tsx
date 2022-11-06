import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Navbar() {
  return (
    <NavWrapper>
      <div className='logo'>Carter</div>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link href='/library'>Library</Link>
        </li>
        <li className='nav-item'>
          <Link href='/about-us'>About us</Link>
        </li>
        <li className='nav-item'>
          <Link href='/submit-your-idea'>Submit your ideas</Link>
        </li>
      </ul>
      <ul className='social-media'>
        <li className='media-item'>facebook</li>
        <li className='media-item'>twitter</li>
        <li className='media-item'>whatsapp</li>
      </ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3rem;

  .nav-list {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    .nav-item {
      padding-right: 15px;
    }
  }
  .social-media {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }
`;
