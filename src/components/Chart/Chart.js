import React, { useState, useEffect } from 'react'
import { Container } from './Layout'
import { Bar, Line } from 'react-chartjs-2'

export const Chart = ({
  data = [],
  selectedArea = 'Camden',
  selected,
  selectArea
}) => {
  // const [selected, setSelected] = useState([])

  // const dates = data.map(data => data.date)
  const totalCases = selected.map(data => data.total_cases)
  const newCases = selected.map(data => data.new_cases)

  // const selectArea = input => {
  //   if (data) {
  //     const selectedData = data.filter(data => {
  //       return data.area_name === input
  //     })
  //     console.log('selected data', selectedData)
  //     return setSelected(selectedData)
  //   }

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
      }
    }
  }

  const lineChart =
    selected.length !== 0 ? (
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
              borderColor: '#98B9AB',
              borderWidth: 1,
              fill: false
            },
            {
              data: selected.map(({ total_cases }) => total_cases),
              label: 'Total Cases',
              backgroundColor: 'blue',
              borderWidth: 1,
              borderColor: '#98B9AB',
              fill: false
            }
          ]
        }}
        options={options}
      />
    ) : (
      <p>Loading.....</p>
    )

  const barChart = (
    <Bar
      height='600px'
      width='600px'
      data={{
        // labels: [`Total Cases in ${selectedArea}`],
        labels: selected.map(({ date }) => date),
        datasets: [
          {
            label: 'Total Cases',
            backgroundColor: 'blue',
            fill: false,
            // data: selected.map(data => {
            //   return data.total_cases
            // })
            data: totalCases
          },
          {
            label: 'New Cases',
            backgroundColor: 'blue',
            fill: false,
            // data: selected.map(data => {
            //   return data.total_cases
            // })
            data: newCases
          }
        ]
      }}
      options={{
        legend: { display: true },
        plugins: {
          title: { display: true, text: selectedArea }
        }
      }}
    />
  )

  return <Container>{barChart}</Container>
}
