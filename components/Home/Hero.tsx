import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import gsap from 'gsap';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BackgroundSpiral } from '../icons';
import { urlForImage } from '../../lib/sanity';

export default function Hero({ posts }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(1);

  const blogposts = posts.map((post, index: number) => {
    return {
      title: post.title,
      postedBy: {
        name: 'Ifeanyi Lucky',
        image:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      },
      image: post.mainImage,
      id: `00${index + 1}`,
      slug: post.slug.current,
    };
  });
  const slideNext = () => {
    setCurrent((c) => {
      if (c === blogposts.length - 1) {
        return 0;
      } else {
        return c + 1;
      }
    });
    setFade(1);
  };
  const slideBack = () => {
    setCurrent((c) => {
      if (c === 0) {
        return blogposts.length - 1;
      } else {
        return c - 1;
      }
    });
    setFade(1);
  };
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    const blogContent = document.querySelector('.blog-content');

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => {
        blogContent?.classList.add('fade-in-left');
        if (c === blogposts.length - 1) {
          return 0;
        } else {
          return c + 1;
        }
      });
    }, 2500);
    return () => {
      resetTimeout();
    };
  }, [current]);
  return (
    <Wrapper className='container' ref={ref}>
      <BackgroundSpiral />
      <div className='row'>
        <div className='col'>
          {!blogposts || !blogposts.length ? (
            'loading'
          ) : (
            <div
              className={`blog-content`}
              fade={fade}
              onAnimationEnd={() => setFade(0)}
            >
              <p>BLOG {blogposts[current].id}</p>
              <h1 className='font-h1'>
                {_.truncate(blogposts[current].title, { length: 30 })}
              </h1>
              <div className='link-with-arrow'>
                <Link href={blogposts[current].slug} className='link'>
                  Read More
                </Link>
                <ArrowRight />
              </div>
              <div className='postedBy'>
                <div className='user-profile'>
                  <img
                    src={blogposts[current].postedBy.image}
                    alt={blogposts[current].postedBy.name}
                    className='user-img'
                  />
                </div>
                <p>{blogposts[current].postedBy.name}</p>
              </div>
            </div>
          )}
        </div>
        <div className='col'>
          <div
            className={`img-wrapper ${current ? 'fade-in-right' : ''}`}
            onAnimationEnd={() => setFade(0)}
            fade={fade}
          >
            {!blogposts ? (
              'loading'
            ) : (
              <img
                src={urlForImage(blogposts[current].image)}
                alt={blogposts[current].title}
                className='featured-img'
              />
            )}
          </div>
          <div className='ctrl'>
            <button className='arrow-btn' onClick={slideBack}>
              <ArrowLeft />
            </button>{' '}
            <p>{blogposts[current].id}</p>
            <button className='arrow-btn' onClick={slideNext}>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    .col {
      .img-wrapper {
        width: 550px;
        height: 550px;
        border-radius: 10px !important;
        overflow: hidden;
        max-width: 100%;
        object-fit: cover;
      }
      .ctrl {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        p {
          padding: 0 1rem;
        }
      }

      .blog-content {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        height: 430px;

        /* .postedBy {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;

          .user-profile {
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 50%;
            border: 1.5px solid #0d3b66;
            margin-right: 10px;
            .user-img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 1.5px solid #fff;
            }
          }
        } */
      }
      .fade-in-left {
        transition: ease 1000ms;
        animation: fadeInLeft 0.5s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .fade-in-right {
        transition: ease 1000ms;
        animation: fadeInRight 0.5s 1 cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
    }

    .img-wrapper {
      height: 300px;
      width: 100%;
    }
  }
  @keyframes fadeInLeft {
    0% {
      transform: translate(-100px, -50px);
      scale: 0.6;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
  @keyframes fadeInRight {
    0% {
      transform: translate(100px, 50px);
      scale: 0.6;
      opacity: 0;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
`;
