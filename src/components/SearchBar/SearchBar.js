import { useState, useEffect } from 'react'
import { SearchBar as Search } from './Layout'

export const SearchBar = ({
  data,
  handleSearch,
  //   handleFilteredData,
  setSearchData
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  //   const [searchData, setSearchData] = useState([])

  useEffect(() => {
    console.log('search bar component mounted')
  }, [data])

  //   data.filter(data => {

  //     if (searchTerm === '') {
  //       return data
  //     } else if (data.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return data
  //     }
  //   })

  const handleFilteredData = e => {
    const searchWord = e.target.value
    const filterArr = data.filter(data => {
      return data.toLowerCase().includes(searchWord.toLowerCase())
    })
    setSearchData(filterArr)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log('submit form')
    handleSearch(searchTerm)
  }

  //   console.log('search term', searchTerm)
  return (
    <form onSubmit={handleFormSubmit}>
      <Search
        // onChange={e => setSearchTerm(e.target.value)}
        onChange={handleFilteredData}
        type='text'
        placeholder='Search....'
      />
    </form>
  )
}
