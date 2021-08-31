import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
`

export const Title = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`

export const Wrapper = styled.div`
  padding-top: 20px;
  max-width: 80vw;
  margin: 0 auto;
`

export const CasesWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Main = styled.main`
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const SideBarWrapper = styled.aside`
  margin-top: 20px;
`

export const SelectWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`
export const ChartWrapper = styled.section`
  margin-top: 20px;
  margin-left: 20px;
  height: auto;
  width: 100%;
  background-color: #ffffff;
  padding: 15px;

  border-radius: 12px;
  background: #ffffff;
  box-shadow: 23px 23px 66px #d9d9d9, -23px -23px 66px #ffffff;
`

export const ChartHeader = styled.h2`
  font-size: 22px;
`

export const ChartOptions = styled.div``
