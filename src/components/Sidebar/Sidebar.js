import { useState, useEffect } from 'react'
import { Wrapper, SidebarItem, SidebarText } from './Layout'
import { SearchBar } from '../SearchBar/SearchBar'

export const Sidebar = ({ data, handleSearch, handleSearchClick }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    console.log('Siderbar component mounted')
    setSearchData(data)
  }, [data])

  //   const [filteredData, setFilteredData] = useState([])

  //   data.filter(data => {
  //     if (searchTerm === '') {
  //       return data
  //     } else if (data.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return data
  //     }
  //   })

  //   const handleFilteredData = e => {
  //     const searchWord = e.target.value
  //     const filterArr = data.filter(data => {
  //       return data.toLowerCase().includes(searchWord.toLowerCase())
  //     })
  //     setFilteredData(filterArr)
  //   }

  const boroughOption = searchData.map((item, index, array) => {
    // const totalCases = array[array.length - 1].total_cases
    return (
      <SidebarItem
        onClick={e => handleSearchClick(e.target.textContent)}
        key={item}
      >
        <SidebarText>
          {item}
          {/* <span>5,44434</span> */}
        </SidebarText>
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
