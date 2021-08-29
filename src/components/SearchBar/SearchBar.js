import { useState } from 'react'
import { SearchBar as Search } from './Layout'

export const SearchBar = ({ data, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  data.filter(data => {
    if (searchTerm === '') {
      return data
    } else if (
      data.area_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return data
    }
  })

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log('submit form')
    handleSearch(searchTerm)
  }

  console.log('search term', searchTerm)
  return (
    <form onSubmit={handleFormSubmit}>
      <Search
        onChange={e => setSearchTerm(e.target.value)}
        type='text'
        placeholder='Search....'
      />
    </form>
  )
}
