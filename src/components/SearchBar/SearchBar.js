import { set } from 'date-fns'
import { useState, useEffect } from 'react'
import { SearchBar as Search } from './Layout'

export const SearchBar = ({ data, handleSearch, setSearchData }) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('search bar component mounted')
  }, [data])

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
    console.log('submit form')
    handleSearch(searchTerm)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Search
        onChange={handleFilteredData}
        type='text'
        placeholder='Search....'
      />
    </form>
  )
}
