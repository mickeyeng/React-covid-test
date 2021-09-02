import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  padding: var(--spacing-normal);
  border: 1px solid #5b616e33;
  margin-left: var(--spacing-small);
  -webkit-transition: all 0.5s 0s ease;
  -moz-transition: all 0.5s 0s ease;
  -o-transition: all 0.5s 0s ease;
  transition: all 0.5s 0s ease;
  outline: none;

  :hover {
    background-color: var(--grey);
    border: 1px solid black;
  }

  :focus {
    background-color: var(--grey);
    border: 1px solid black;
  }

  :first-child {
    margin-left: 0;
  }
`
