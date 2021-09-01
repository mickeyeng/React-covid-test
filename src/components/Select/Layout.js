import styled from 'styled-components'

export const CustomSelect = styled.select`
  margin-left: 20px;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
`

export const SelectDiv = styled.div`
  width: 100%;
  max-width: 30ch;
  border: 0.4px solid black;
  border-radius: 8px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  display: grid;
  grid-template-areas: 'select';
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  margin-left: 15px;

  ::after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: black;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  :after {
    grid-template-areas: 'select';
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
`

export const Option = styled.option``
