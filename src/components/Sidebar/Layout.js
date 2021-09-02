import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 800px;
  /* background-color: #ffffff; */
  padding: 0 var(--spacing-normal) var(--spacing-normal) var(--spacing-normal);
  overflow-y: scroll;
  border-radius: var(--border-radius);
`
export const SearchBar = styled.input`
  background-color: #ececee;
  border: none;
  border-radius: var(--border-radius);
`
export const SidebarItem = styled.div`
  cursor: pointer;
  margin: var(--spacing-large) auto;
  display: flex;
  align-items: center;
  border-bottom: 0.4px solid #5b616e33;
  -webkit-transition: all 0.5s 0s ease;
  -moz-transition: all 0.5s 0s ease;
  -o-transition: all 0.5s 0s ease;
  transition: all 0.5s 0s ease;
  outline: none;

  :hover {
    border-bottom: 2px solid #5b616e33;
  }
`

export const SidebarText = styled.p`
  font-size: var(--x-small-font-size);
  margin-bottom: var(--spacing-small);

  span {
    color: red;
    margin-left: 5px;
  }
`

export const SidebarCount = styled.span`
  color: red;
`
