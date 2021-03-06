import { useState, useEffect } from 'react'
import { Wrapper, SidebarItem, SidebarText } from './Layout'
import { SearchBar } from '../SearchBar/SearchBar'

export const Sidebar = ({ data, handleSearch, handleSearchClick }) => {
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    setSearchData(data)
  }, [data])

  const boroughOption = searchData.map((item, index, array) => {
    return (
      <SidebarItem
        tabIndex={0}
        onClick={e => handleSearchClick(e.target.textContent)}
        onKeyPress={e => handleSearchClick(e.target.textContent)}
        key={item}
      >
        <SidebarText>{item}</SidebarText>
      </SidebarItem>
    )
  })

  return (
    <Wrapper>
      <SearchBar
        setSearchData={setSearchData}
        handleSearch={handleSearch}
        data={data}
      />
      {boroughOption}
    </Wrapper>
  )
}
