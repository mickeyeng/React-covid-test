import React, { useState, useEffect } from 'react'
import { Container } from './Layout'
import { Bar, Line } from 'react-chartjs-2'

export const Chart = ({ data = [] }) => {
  const [selected, setSelected] = useState([])

  // const dates = data.map(data => data.date)
  const areaNames = data.map(data => data.area_name)
  const totalCases = data.map(data => data.total_cases)
  const newCases = data.map(data => data.new_cases)

  const selectArea = (input = 'Greenwich') => {
    if (data) {
      const selectedData = data.filter(data => {
        return data.area_name === input
      })
      console.log('selected data', selectedData)
      return setSelected(selectedData)
    }
  }

  useEffect(() => {
    selectArea()
  }, [data])

  console.log('selected', selected)

  const options = {
    responsive: true,
    maintainAspectRation: false
  }

  console.log('selected[0]', selected[0])

  const lineChart = data ? (
    <Line
      height='600px'
      width='600px'
      data={{
        // labels: dates,
        labels: selected.map(data => data.date),
        datasets: [
          {
            data: areaNames,
            label: 'Area name',
            backgroundColor: '#255885',
            borderColor: 'orange',
            borderWidth: 1
            // fill: true
          },
          {
            data: selected.map(data => data.new_cases),
            label: 'New Cases',
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1,
            fill: false
          },
          {
            data: selected.map(data => data.total_cases),
            label: 'Total Cases',
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: 'blue',
            fill: false
          }
        ]
      }}
      options={options}
    />
  ) : (
    <p>Loading.....</p>
  )

  return <Container>{lineChart}</Container>
}
