import styled from 'styled-components'

export const StatBox = styled.div`
  border-top: 4px solid red;
  border: 1px solid #5b616e33;
  margin-right: 20px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: rgb(17 17 23 / 20%) 2px 2px 10px;

  @media (max-width: 480px) {
    margin: 10px auto;
    width: 100%;
  }
`

export const StatText = styled.h2`
  font-size: 18px;
  padding-bottom: 15px;
  line-height: 24px;
`

export const StatCount = styled.h2`
  font-size: 24px;
  color: #d03737;
`
