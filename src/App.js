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
import { Button } from './components/Button/Button'
import { ButtonsWrapper } from './Layout'

const filterDateByNumber = (data = [], n) => {
  if (data.length > 1) {
    return data.slice(data.length - n)
  }
  return null
}

function App() {
  const [data, setData] = useState([])
  const [selectedArea, setSelectedArea] = useState('Camden')
  const boroughList = data && data.map(data => data.area_name)
  const removeDuplicates = [...new Set(boroughList)]
  const [selected, setSelected] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectGraph, setSelectGraph] = useState()

  const dateRef = useRef(null)
  const graphRef = useRef()
  const totalCasesRef = useRef()
  let totalCases
  let totalCasesAllBoroughs

  console.log('Button ref', dateRef.current)

  if (selected.length > 1) {
    totalCasesAllBoroughs = data.reduce((acc, curr) => {
      return acc + curr.total_cases
    }, 0)
    // totalCasesRef.current = totalCasesAllBoroughs
    totalCases = selected[selected.length - 1].total_cases
  }

  const memoziedTotal = useMemo(() => {
    totalCasesRef.current = totalCasesAllBoroughs
    console.log('rendered')
    return totalCasesAllBoroughs
  }, [totalCasesAllBoroughs])

  const handleFilterDate = e => {
    e.target.previousElementSibling.classList.remove('active')
    dateRef.current = e.target.textContent.toLowerCase()

    console.log('date ref current switch', dateRef.current)
    switch (dateRef.current) {
      case '':
        // setFilteredData(selected)
        break
      case 'week':
        selected && setFilteredData(filterDateByNumber(selected, 7))
        e.target.previousElementSibling.classList.add('active')
        break
      case 'month':
        selected && setFilteredData(filterDateByNumber(selected, 30))
        e.target.previousElementSibling.classList.add('active')
        break
      case '3 months':
        selected && setFilteredData(filterDateByNumber(selected, 90))
        e.target.previousElementSibling.classList.add('active')
        break
      default:
        setFilteredData(selected)
        // return dateRef.current.selectedIndex
        return dateRef.current
    }
  }

  const selectArea = useCallback(
    input => {
      if (data) {
        const selectedData = data.filter(data => {
          return data.area_name === input
        })
        dateRef.current = null
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
          {/* <Title>London Borough 2020 COVID-19 Cases</Title> */}
        </Header>

        <CasesWrapper>
          <CasesBox
            total={memoziedTotal}
            borderColor={'orange'}
            // selectedArea={selectedArea}
            selected={selected}
            statInfo='Total Cases In London'
          />
          <CasesBox
            total={memoziedTotal}
            borderColor={'green'}
            // selectedArea={selectedArea}
            selected={selected}
            statInfo='Total New Cases in London'
          />
          <CasesBox
            total={totalCases}
            borderColor={'red'}
            selectedArea={selectedArea}
            selected={selected}
            statInfo='Total Cases In'
          />
          <CasesBox
            total={totalCases}
            borderColor={'blue'}
            selectedArea={selectedArea}
            selected={selected}
            statInfo='Total New Cases'
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
              <Title>London Borough 2020 COVID-19 Cases</Title>

              <ChartOptions>
                <ButtonsWrapper>
                  <Button
                    ref={dateRef}
                    text='Week'
                    handleFilterDate={handleFilterDate}
                  />
                  <Button
                    ref={dateRef}
                    text='Month'
                    handleFilterDate={handleFilterDate}
                  />
                  <Button
                    ref={dateRef}
                    text='3 Months'
                    handleFilterDate={handleFilterDate}
                  />
                </ButtonsWrapper>
                <Select
                  ref={graphRef}
                  option1='Line'
                  option2='Bar'
                  option3='Area'
                  onChange={e => setSelectGraph(e.target.value)}
                />
              </ChartOptions>
              <ChartHeader>{selectedArea}</ChartHeader>
            </SelectWrapper>
            <Chart
              selected={dateRef.current !== null ? filteredData : selected}
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
