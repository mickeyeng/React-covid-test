import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #5b616e33;
  margin-left: 8px;
  -webkit-transition: all 0.5s 0s ease;
  -moz-transition: all 0.5s 0s ease;
  -o-transition: all 0.5s 0s ease;
  transition: all 0.5s 0s ease;
  outline: none;

  :hover {
    background-color: #5b616e17;
    border: 1px solid black;
  }

  :focus {
    /* background-color: #5b616e17; */
    /* border: 1px solid black; */
  }

  :first-child {
    margin-left: 0;
  }

  /* button {
    background-color: white;
    border: none;
    padding: 8px;
  } */

  .active {
    background-color: #5b616e17;
    border: 1px solid black;
  }
`

export const ButtonText = styled.p`
  font-size: 16px;
`
