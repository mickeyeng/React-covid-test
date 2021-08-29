import { useState, useEffect, useCallback } from 'react'
import { parse, readRemoteFile } from 'react-papaparse'
import dataCSV from './data/phe_cases_london_boroughs.csv'
import './App.css'
import { Chart } from './components/Chart/Chart'
import styled from 'styled-components'
import { BoroughPicker } from './components/BoroughPicker/BoroughPicker'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
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
  }, [])

  console.log('data', data)

  return (
    <Container>
      <div className='App'>
        <h1>COVID VISUALIZATION</h1>
        <BoroughPicker data={data} />
        <Chart data={data} />
      </div>
    </Container>
  )
}

export default App
