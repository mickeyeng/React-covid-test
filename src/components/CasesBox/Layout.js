import styled from 'styled-components'

export const StatBox = styled.div`
  border-top: 5px solid var(--green);
  margin-right: 20px;
  padding: 20px;
  text-align: center;
  border-radius: var(--border-radius);
  background: #ffffff;
  box-shadow: rgb(17 17 23 / 20%) 2px 2px 10px;
  -webkit-transition: all 0.5s 0s ease;
  -moz-transition: all 0.5s 0s ease;
  -o-transition: all 0.5s 0s ease;
  transition: all 80ms ease-in-out 0s;

  @media (max-width: 480px) {
    margin: 10px auto;
    width: 100%;
  }
`

export const StatText = styled.h2`
  font-size: var(--medium-font-size);
  padding-bottom: var(--spacing-normal);
  line-height: 2.4rem;
`

export const StatCount = styled.h2`
  font-size: var(--large-font-size);
  color: var(--primary);
`
