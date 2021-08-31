import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 800px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 23px 23px 66px #d9d9d9, -23px -23px 66px #ffffff;
  overflow-y: scroll;
`
export const SearchBar = styled.input`
  background-color: #ececee;
  border: none;
  border-radius: 8px;
  padding: 4px;
`
export const SidebarItem = styled.div`
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  align-items: center;
  border-bottom: 0.4px solid grey;
`

export const SidebarText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;

  span {
    color: red;
    margin-left: 5px;
  }
`

export const SidebarCount = styled.span`
  color: red;
`
