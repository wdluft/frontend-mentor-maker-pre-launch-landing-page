import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
  background: var(--secondary);
  border: 2px solid var(--black);
  border-radius: 24px;
  font-weight: 800;
  color: var(--white);
  font-size: var(--bodyTextSize);
  line-height: var(--bodyLineHeight);
  padding: 0.75rem 1.625rem;

  :active, :focus {
    border: var(--primary) 2px solid;
    outline: none;
  }

  ::placeholder {
    color: var(--grey);
    font-weight: 800;
  }
`;

function Input({type, placeholderText}) {
  return (
    <InputWrapper type={type} placeholder={placeholderText}/>
      
  )
}

export default Input
