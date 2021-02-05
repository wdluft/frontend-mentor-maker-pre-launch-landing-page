import React from 'react';
import styled from 'styled-components';
import ScrollImg from '../../assets/icon-scroll.svg';
import MobileHeroImg from '../../assets/illustration-hero-mobile.png';

const HeroWrapper = styled.div`
  position: relative;
  padding: 14.625rem 1.5rem 9rem;
  text-align: center;

  /* mobile img */
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${MobileHeroImg});
    width: 100vw;
    height: 234px;
    background-size: cover;
    background-repeat: repeat-x;
  }

  h1 {
    padding: 3rem 0 1.5rem;

    span {
      color: var(--primary);
    }
  }

  p {
    padding-bottom: 2rem;
  }
`;

function Hero() {
  return (
    <HeroWrapper>
      <h1>
        Get paid for the
        <br />
        work you <span>love</span>
        <br />
        to do.
      </h1>
      <p>
        The 9-5 grind is so last century. We believe in living life on your own
        terms. Whether you’re looking to escape the rat race or set up a side
        hustle, we’ve got you covered.
      </p>
      <img src={ScrollImg} alt="" />
    </HeroWrapper>
  );
}

export default Hero;
