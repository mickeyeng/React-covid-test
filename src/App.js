import { useState, useEffect, useCallback } from 'react'
import { parse, readRemoteFile } from 'react-papaparse'
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

  const selectArea = input => {
    if (data) {
      const selectedData = data.filter(data => {
        return data.area_name === input
      })
      console.log('selected data', selectedData)
      return setSelected(selectedData)
    }
  }

  const handleBoroughPicker = value => setSelectedArea(value)

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
        // That's what streaming is for. Specify a step callback to receive the results row-by-row. This way, you won't load the whole file into memory and crash the browser.
        // step: results => setData(results.data),
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

  console.log('data', data)

  return (
    <Container>
      <div className='App'>
        <h1>COVID VISUALIZATION</h1>
        <CasesBox selectedArea={selectedArea} selected={selected} />
        <BoroughPicker
          boroughList={removeDuplicates}
          handleBoroughPicker={handleBoroughPicker}
        />
        <SearchBar handleSearch={handleSearch} data={data} />
        <Chart
          selected={selected}
          selectArea={selectArea}
          selectedArea={selectedArea}
          data={data}
        />
      </div>
    </Container>
  )
}

export default App
