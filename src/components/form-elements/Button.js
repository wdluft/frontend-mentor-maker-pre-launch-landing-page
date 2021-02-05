import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  font-size: var(--bodyTextSize);
  line-height: var(--bodyLineHeight);
  font-weight: 800;
  color: var(--secondary);
  background-color: var(--primary);
  border: 2px solid transparent;
  padding: 0.75rem 1.625rem;
  border-radius: 24px;
  transition: var(--transition);

  :hover, :active {
    background: var(--black);
    color: var(--white);
    border: 2px var(--primary) solid;
  }
`;

function Button({type, text}) {
  return (
    <ButtonWrapper type={type}>
      {text}
    </ButtonWrapper>
  )
}

export default Button
