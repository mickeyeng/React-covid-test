import { useState, useEffect, useCallback, useRef } from 'react'
import { readRemoteFile } from 'react-papaparse'
import dataCSV from './data/phe_cases_london_boroughs.csv'
import './App.css'
import { Chart } from './components/Chart/Chart'
import styled from 'styled-components'
import { BoroughPicker } from './components/BoroughPicker/BoroughPicker'
import { SearchBar } from './components/SearchBar/SearchBar'
import { CasesBox } from './components/CasesBox/CasesBox'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [data, setData] = useState([])
  const [selectedArea, setSelectedArea] = useState()
  const boroughList = data && data.map(data => data.area_name)
  const removeDuplicates = [...new Set(boroughList)]
  const [selected, setSelected] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectDate, setSelectDate] = useState()
  const [selectGraph, setSelectGraph] = useState()
  const dateRef = useRef()
  const graphRef = useRef()
  let totalCases

  const filterDateByNumber = (data = [], n) => {
    if (data.length > 1) {
      return data.slice(data.length - n)
    }
    return null
  }

  console.log('selected dates =', selectDate)

  if (selected.length > 1) {
    totalCases = selected[selected.length - 1].total_cases
  }

  const handleFilterDate = e => {
    switch (e.target.selectedIndex) {
      case 0:
        break
      case 1:
        selected && setFilteredData(filterDateByNumber(selected, 7))
        break
      case 2:
        selected && setFilteredData(filterDateByNumber(selected, 30))
        break
      case 3:
        selected && setFilteredData(filterDateByNumber(selected, 90))
        break
      default:
        return null
    }
    setSelectDate(e.target.selectedIndex)
  }

  const selectArea = input => {
    if (data) {
      const selectedData = data.filter(data => {
        return data.area_name === input
      })
      dateRef.current.selectedIndex = 0
      return setSelected(selectedData)
    }
  }

  const handleBoroughPicker = value => {
    setSelectedArea(value)
    return setSelectDate(0)
  }

  const handleSearch = value => {
    console.log('selected area handle', selectedArea)
    return setSelectedArea(value)
  }

  console.log('selected area', selectedArea)

  useEffect(() => {
    try {
      readRemoteFile(dataCSV, {
        header: true,
        download: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        encoding: true,
        complete: results => {
          setData(results.data)
        },
        error: error => {
          return error + 'Error with csv, please try again'
        }
      })
    } catch (e) {
      console.log('error fetching data', e)
    }
    selectArea(selectedArea)
  }, [selectedArea])

  return (
    <Container>
      <div className='App'>
        <h1>COVID VISUALIZATION</h1>
        <CasesBox
          total={totalCases}
          selectedArea={selectedArea}
          selected={selected}
        />
        <BoroughPicker
          boroughList={removeDuplicates}
          handleBoroughPicker={handleBoroughPicker}
        />
        <SearchBar handleSearch={handleSearch} data={data} />
        <select ref={dateRef} onChange={handleFilterDate}>
          <option defaultValue>All</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
        <select ref={graphRef} onChange={e => setSelectGraph(e.target.value)}>
          <option defaultValue>All</option>
          <option>Line</option>
          <option>Bar</option>
          <option>Area</option>
        </select>
        <Chart
          selected={selectDate > 0 ? filteredData : selected}
          selectArea={selectArea}
          selectedArea={selectedArea}
          data={data}
          selectGraph={selectGraph}
        />
      </div>
    </Container>
  )
}

export default App
