import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { readRemoteFile } from 'react-papaparse'
import dataCSV from './data/phe_cases_london_boroughs.csv'
import './App.css'
import { Chart } from './components/Chart/Chart'
import { CasesBox } from './components/CasesBox/CasesBox'
import { Sidebar } from './components/Sidebar/Sidebar'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Layout'
import {
  Title,
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
  const totalNewCasesRef = useRef()
  let totalCases
  let totalNewCases
  let totalCasesAllBoroughs
  let totalNewCasesAllBoroughs

  if (selected.length > 1) {
    totalCasesAllBoroughs = data.reduce((acc, curr) => {
      return acc + curr.total_cases
    }, 0)
    totalNewCasesAllBoroughs = data.reduce((acc, curr) => {
      return acc + curr.new_cases
    }, 0)
    totalCases = selected[selected.length - 1].total_cases
    totalNewCases = selected[selected.length - 1].new_cases
  }

  const memoizedTotal = useMemo(() => {
    totalCasesRef.current = totalCasesAllBoroughs
    console.log('rendered')
    return totalCasesAllBoroughs
  }, [totalCasesAllBoroughs])

  const memoizedTotalNew = useMemo(() => {
    totalNewCasesRef.current = totalNewCasesAllBoroughs
    return totalNewCasesAllBoroughs
  }, [totalNewCasesAllBoroughs])

  const handleFilterDate = e => {
    const buttonStyle = e.target.style
    for (let el of e.target.parentElement.children) {
      el.style.background = 'white'
      el.style.border = '1px solid #5b616e33'
    }
    dateRef.current = e.target.textContent.toLowerCase()
    switch (dateRef.current) {
      case '':
        break
      case 'week':
        selected && setFilteredData(filterDateByNumber(selected, 7))
        buttonStyle.backgroundColor = '#5b616e17'
        buttonStyle.border = '1px solid black'
        break
      case 'month':
        selected && setFilteredData(filterDateByNumber(selected, 30))
        buttonStyle.backgroundColor = '#5b616e17'
        buttonStyle.border = '1px solid black'
        break
      case '3 months':
        selected && setFilteredData(filterDateByNumber(selected, 90))
        buttonStyle.backgroundColor = '#5b616e17'
        buttonStyle.border = '1px solid black'
        break
      default:
        setFilteredData(selected)
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

  const handleSearch = value => {
    const term = value.charAt(0).toUpperCase() + value.slice(1)
    if (removeDuplicates.includes(term)) {
      return setSelectedArea(term)
    } else {
      alert('London Borough does not exist. Please try again')
    }
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
    selectArea(selectedArea)
    setFilteredData(selected)
  }, [selectedArea, selectArea, memoizedConvertCsvFile])

  return (
    <div className='App'>
      <GlobalStyle />
      <Wrapper>
        <CasesWrapper>
          <CasesBox
            total={memoizedTotal}
            borderColor={'orange'}
            selected={selected}
            statInfo='Total Cases In London'
          />
          <CasesBox
            totalNew={memoizedTotalNew}
            borderColor={'green'}
            selected={selected}
            statInfo='New Cases in London'
          />
          <CasesBox
            total={totalCases}
            borderColor={'red'}
            selectedArea={selectedArea}
            selected={selected}
            statInfo='Total Cases in'
          />
          <CasesBox
            total={totalNewCases}
            borderColor={'blue'}
            selectedArea={selectedArea}
            selected={selected}
            statInfo='New Cases in'
            newCases
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
      </Wrapper>
    </div>
  )
}

export default App
