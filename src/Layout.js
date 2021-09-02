import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  // ******** Colors ********
  --white: #ffffff;
  --grey: #5b616e33;
  --stat-color: #d03737;
  

  // ******** Colors ********
  
  // ******** Font ********
  --x-small-font-size: 1.3rem;
  --small-font-size: 1.6rem;
  --medium-font-size: 1.8rem;
  --large-font-size: 2.2rem;
  // ******** Font ********
  
  // ******** Spacing ********
  --spacing-small: 1.2rem;
  --spacing-normal: 1.5rem;
  --spacing-large: 3rem;
  --spacing-x-large: 5rem;
  --border-radius: 8px;
  // ******** Spacing ********

}

  *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  background-color: '#F6F8F9';
  letter-spacing: 1.2px;
  line-height: 1.4;
}


`

export const Header = styled.header`
  display: flex;
`

export const Title = styled.h1`
  padding: var(--spacing-large) 0 var(--spacing-large) 0;
  color: black;
  font-size: var(--large-font-size);
  font-weight: 700;
  width: 100%;
`

export const Wrapper = styled.div`
  padding-top: var(--spacing-large);
  /* max-width: 80vw; */
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 480px) {
    max-width: 90vw;
  }
`

export const CasesWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  -webkit-transition: all 1s 0s ease;
  -moz-transition: all 1s 0s ease;
  -o-transition: all 1s 0s ease;
  transition: all 1s 0s ease;
  @media (max-width: 480px) {
    flex-direction: column;
  }

  div:last-child {
    margin-right: 0;
  }
`

export const Main = styled.main`
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const SideBarWrapper = styled.aside`
  padding: var(--spacing-x-large) 0 var(--spacing-x-large) 0;
  box-shadow: rgb(17 17 23 / 20%) 2px 2px 10px;
  background-color: '#ffffff';
  border: 1px solid #5b616e33;
  margin-top: 20px;
  min-width: 250px;
  border-radius: var(--border-radius);
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--spacing-large);
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`

export const ChartWrapper = styled.section`
  border: 1px solid #5b616e33;
  margin-top: 20px;
  margin-left: 20px;
  height: auto;
  width: 100%;
  background-color: #ffffff;
  padding: var(--spacing-normal);

  border-radius: 8px;
  background: #ffffff;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgb(17 17 23 / 20%) 2px 2px 10px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
`

export const ChartHeader = styled.h2`
  padding-bottom: var(--spacing-normal);
  font-size: var(--medium-font-size);
  @media (max-width: 760px) {
    padding: var(--spacing-x-large) 0;
  }
`

export const ChartOptions = styled.div`
  padding-bottom: var(--spacing-large);
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  @media (max-width: 760px) {
    padding-bottom: var(--spacing-x-large);
  }
`
