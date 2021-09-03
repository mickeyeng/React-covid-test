import { set } from 'date-fns'
import { useState, useEffect } from 'react'
import { SearchBar as Search } from './Layout'

export const SearchBar = ({ data, handleSearch, setSearchData }) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {}, [data])

  const handleFilteredData = e => {
    const searchWord = e.target.value
    const filterArr = data.filter(data => {
      return data.toLowerCase().includes(searchWord.toLowerCase())
    })
    setSearchTerm(searchWord)
    setSearchData(filterArr)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    e.target.firstChild.value = ''
    return handleSearch(searchTerm)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Search
        name='search'
        area-label='search'
        area-required='true'
        onChange={handleFilteredData}
        type='text'
        placeholder='Search....'
      />
    </form>
  )
}
