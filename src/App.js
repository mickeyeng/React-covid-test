import { useEffect } from 'react'
import { readString, CSVReader, readRemoteFile } from 'react-papaparse'
import data from './data/phe_cases_london_boroughs.csv'
import './App.css'

function App() {
  const loadData = () => {
    readRemoteFile(data, {
      header: true,
      download: true,
      complete: results => {
        console.log(results.data)
      }
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='App'>
      <h1>Hello world</h1>
    </div>
  )
}

export default App
