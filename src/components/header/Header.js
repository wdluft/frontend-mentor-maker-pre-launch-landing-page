import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const HeaderWrapper = styled.header`
  max-width: 69rem;
  margin: 0 auto;
  padding: 2.5rem 0 4.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 40rem) {
    padding: 3rem 2.5rem 5rem;

    justify-content: flex-start;
  }

  @media screen and (min-width: 69rem) {
    padding: 5rem 0 6rem;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="maker" />
    </HeaderWrapper>
  );
}

export default Header;
