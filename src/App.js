import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { readRemoteFile } from 'react-papaparse'
import dataCSV from './data/phe_cases_london_boroughs.csv'
import './App.css'
import { Chart } from './components/Chart/Chart'
import styled from 'styled-components'
import { BoroughPicker } from './components/BoroughPicker/BoroughPicker'
import { SearchBar } from './components/SearchBar/SearchBar'
import { CasesBox } from './components/CasesBox/CasesBox'
import { Sidebar } from './components/Sidebar/Sidebar'
import {
  Title,
  Header,
  Wrapper,
  CasesWrapper,
  Main,
  SideBarWrapper,
  SelectWrapper,
  ChartWrapper,
  ChartHeader,
  ChartOptions
} from './Layout'
import { Select } from './components/Select/Select'
function App() {
  const [data, setData] = useState([])
  const [selectedArea, setSelectedArea] = useState('Camden')
  const boroughList = data && data.map(data => data.area_name)
  const removeDuplicates = [...new Set(boroughList)]
  const [selected, setSelected] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectGraph, setSelectGraph] = useState()
  const dateRef = useRef(0)
  const graphRef = useRef()
  let totalCases

  const filterDateByNumber = (data = [], n) => {
    if (data.length > 1) {
      return data.slice(data.length - n)
    }
    return null
  }

  if (selected.length > 1) {
    totalCases = selected[selected.length - 1].total_cases
  }

  const handleFilterDate = e => {
    console.log('selected data handle filter', e.target.selectedIndex)
    // switch (e.target.selectedIndex) {
    switch (dateRef.current.selectedIndex) {
      case 0:
        // setFilteredData(selected)
        break
      case 1:
        // debugger
        selected && setFilteredData(filterDateByNumber(selected, 7))
        break
      case 2:
        selected && setFilteredData(filterDateByNumber(selected, 30))
        break
      case 3:
        selected && setFilteredData(filterDateByNumber(selected, 90))
        break
      default:
        setFilteredData(selected)
        return dateRef.current.selectedIndex
    }
  }

  const selectArea = useCallback(
    input => {
      if (data) {
        const selectedData = data.filter(data => {
          return data.area_name === input
        })
        dateRef.current.selectedIndex = 0
        return setSelected(selectedData)
      }
    },
    [data]
  )

  const handleBoroughPicker = value => {
    setSelectedArea(value)
    // return setSelectDate(0)
  }

  const handleSearch = value => {
    console.log('selected area handle', selectedArea)
    return setSelectedArea(value)
  }

  const handleSearchClick = value => {
    return setSelectedArea(value)
  }

  const convertCsvFile = () => {
    console.log('handle convert function ran with use memo')
    try {
      return readRemoteFile(dataCSV, {
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
    } catch (error) {
      return 'Error converting file' + error
    }
  }

  const memoizedConvertCsvFile = useMemo(convertCsvFile, [])

  useEffect(() => {
    console.log('App component mounted')
    selectArea(selectedArea)
    setFilteredData(selected)
  }, [selectedArea, selectArea, memoizedConvertCsvFile])

  return (
    <Wrapper>
      <div className='App'>
        <Header>
          <Title>London Borough 2020 COVID-19 Cases</Title>
        </Header>

        <CasesWrapper>
          <CasesBox
            total={totalCases}
            selectedArea={selectedArea}
            selected={selected}
            statInfo='Total Cases In All Boroughs'
          />
          <CasesBox
            total={totalCases}
            selectedArea={selectedArea}
            selected={selected}
            statInfo='Total New Cases In All Boroughs'
          />
        </CasesWrapper>
        <Main>
          <SideBarWrapper>
            <Sidebar
              handleSearchClick={handleSearchClick}
              data={removeDuplicates}
              handleSearch={handleSearch}
            />
          </SideBarWrapper>
          <ChartWrapper>
            <SelectWrapper>
              <ChartHeader>{selectedArea}</ChartHeader>
              <ChartOptions>
                <Select
                  ref={dateRef}
                  option1='Last 7 Days'
                  option2='Last 30 Days'
                  option3='Last 90 Days'
                  onChange={handleFilterDate}
                />
                <Select
                  ref={graphRef}
                  option1='Line'
                  option2='Bar'
                  option3='Area'
                  onChange={e => setSelectGraph(e.target.value)}
                />
              </ChartOptions>
            </SelectWrapper>
            <Chart
              selected={
                dateRef.current.selectedIndex > 0 ? filteredData : selected
              }
              selectArea={selectArea}
              selectedArea={selectedArea}
              data={data}
              selectGraph={selectGraph}
            />
          </ChartWrapper>
        </Main>
        {/* <BoroughPicker
          boroughList={removeDuplicates}
          handleBoroughPicker={handleBoroughPicker}
        /> */}
        {/* <SearchBar handleSearch={handleSearch} data={data} /> */}
      </div>
    </Wrapper>
  )
}

export default App
