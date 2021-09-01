import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
`

export const Title = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: 700;
  width: 100%;
`

export const Wrapper = styled.div`
  padding-top: 20px;
  max-width: 80vw;
  margin: 0 auto;
  @media (max-width: 480px) {
    max-width: 90vw;
  }
`

export const CasesWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

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
  border: 1px solid #5b616e33;
  margin-top: 20px;
  min-width: 250px;
  border-radius: 8px;
  @media (max-width: 480px) {
    width: 100%;
  }
`

// export const SelectWrapper = styled.div`
//   display: flex;
//   margin-top: 5%;
//   padding-bottom: 20px;
//   justify-content: space-between;
//   align-items: center;
//   @media (max-width: 480px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  padding-bottom: 20px;
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
  padding: 15px;

  border-radius: 8px;
  background: #ffffff;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgb(17 17 23 / 20%) 2px 2px 10px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
`

export const ChartHeader = styled.h2`
  font-size: 22px;
  @media (max-width: 760px) {
    padding: 5% 0;
  }
`

// export const ChartOptions = styled.div`
//   display: flex;
//
// `

export const ChartOptions = styled.div`
  display: flex;
  justify-content: flex-end;
`
