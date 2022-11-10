import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LinkedIn, Facebook, Twitter } from '../components/icons';

export default function Navbar() {
  return (
    <NavWrapper>
      <div className='navbar'>
        <div className='logo'>Carter</div>
        <ul className='nav-list'>
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
        </ul>
        <ul className='social__media'>
          <li className='media__item'>
            <LinkedIn />
          </li>
          <li className='media__item'>
            <Facebook />
          </li>
          <li className='media__item'>
            <Twitter />
          </li>
        </ul>{' '}
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #fff;
  @media (max-width: 768px) {
    position: static;
    .navbar {
      .nav-list {
        display: none !important;
      }
    }
  }
  .navbar {
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
        .nav__link {
          color: #646464;
          font-weight: 500;
        }
      }
    }
    .social__media {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      .media__item {
        font-size: 27px;
        color: #646464;
        margin-left: 10px;
      }
    }
  }
`;
