import styled from 'styled-components'

export const CustomSelect = styled.select`
  width: 100%;
  appearance: none;
  background-color: transparent;
  min-width: 100px;
  border: none;
  padding: 0 2.5em 0 1em;
  margin: 0;
  font-family: inherit;
  font-size: var(--small-font-size);
  cursor: inherit;
  line-height: inherit;
  outline: none;
`

export const SelectDiv = styled.div`
  min-width: 100px;
  max-width: 30ch;
  border: 1px solid var(--grey);
  border-radius: var(--border-radius);
  padding: 1.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  background-color: var(--white);
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  justify-content: space-between;

  ::after {
    content: '';
    width: 1.5em;
    height: 0.5em;
    background-color: black;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  :after {
    justify-self: end;
  }

  :focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid black;
    border-radius: inherit;
  }

  @media (max-width: 760px) {
    max-width: 32ch;
  }
`

export const Option = styled.option``
