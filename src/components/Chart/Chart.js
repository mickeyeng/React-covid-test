import React, { useState, useEffect } from 'react'
import { Container } from './Layout'
import { Bar, Line } from 'react-chartjs-2'

export const Chart = ({ data = [], selectedArea = 'Camden' }) => {
  const [selected, setSelected] = useState([])

  // const dates = data.map(data => data.date)
  const areaNames = data.map(data => data.area_name)

  const selectArea = input => {
    if (data) {
      const selectedData = data.filter(data => {
        return data.area_name === input
      })
      console.log('selected data', selectedData)
      return setSelected(selectedData)
    }
  }

  useEffect(() => {
    selectArea(selectedArea)
  }, [data])

  console.log('selected', selected)

  const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      title: {
        display: true,
        text: selectedArea
      },
      tooltip: {
        title: function (tooltipItems, data) {
          return data.labels[tooltipItems.index] + ' '
        }
      }
    }
  }

  const lineChart = data ? (
    <Line
      height='600px'
      width='600px'
      data={{
        // labels: dates,
        labels: selected.map(({ date }) => date),
        datasets: [
          {
            data: selected.map(({ new_cases }) => new_cases),
            label: 'New Cases',
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1,
            fill: false
          },
          {
            data: selected.map(({ total_cases }) => total_cases),
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
