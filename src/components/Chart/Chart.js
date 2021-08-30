import React, { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'
import { format, parseISO, subDays } from 'date-fns'
import { Container } from './Layout'
// import { Bar, Line } from 'react-chartjs-2'

export const Chart = ({
  data = [],
  selectedArea = 'Camden',
  selected,
  selectArea
}) => {
  // const [selected, setSelected] = useState([])

  const dates = data.map(data => data.date)
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

  const lineGraphOptions = {
    plugins: {
      title: {
        display: true,
        text: selectedArea,
        padding: {
          top: 10,
          bottom: 30
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          tickColor: 'red'
        },
        title: {
          color: 'red',
          display: true,
          text: 'Month'
        },
        ticks: {
          beginAtZero: false,
          color: 'blue',
          padding: 12
        }
      },
      y: {
        grid: {
          display: false
        },
        title: {
          color: 'red',
          display: true,
          text: 'Month'
        }
      }
    }
  }

  // const lineChart =
  //   selected.length !== 0 ? (
  //     <Line
  //       height='600px'
  //       width='600px'
  //       data={{
  //         // labels: dates,
  //         labels: selected.map(({ date }) => date),

  //         datasets: [
  //           {
  //             data: selected.map(({ new_cases }) => new_cases),
  //             label: 'New Cases',
  //             borderColor: 'rgba(255,117,92,1)',
  //             pointBorderColor: 'rgba(255,255,255,1)',
  //             pointBackgroundColor: 'rgba(255,255,255,1)',
  //             borderWidth: 1,
  //             fill: false
  //           },
  //           {
  //             data: selected.map(({ total_cases }) => total_cases),
  //             label: 'Total Cases',
  //             backgroundColor: 'blue',
  //             borderWidth: 1,
  //             borderColor: '#98B9AB',
  //             fill: false
  //           }
  //         ]
  //       }}
  //       options={lineGraphOptions}
  //     />
  //   ) : (
  //     <p>Loading.....</p>
  //   )

  // const barChart = (
  //   <Bar
  //     height='600px'
  //     width='600px'
  //     data={{
  //       // labels: [`Total Cases in ${selectedArea}`],
  //       labels: selected.map(({ date }) => date),
  //       datasets: [
  //         {
  //           label: 'Total Cases',
  //           backgroundColor: 'blue',
  //           fill: false,
  //           // data: selected.map(data => {
  //           //   return data.total_cases
  //           // })
  //           data: totalCases
  //         },
  //         {
  //           label: 'New Cases',
  //           backgroundColor: 'blue',
  //           fill: false,
  //           // data: selected.map(data => {
  //           //   return data.total_cases
  //           // })
  //           data: newCases
  //         }
  //       ]
  //     }}
  //     options={{
  //       legend: { display: true },
  //       plugins: {
  //         title: { display: true, text: selectedArea }
  //       }
  //     }}
  //   />
  // )

  return (
    // <Container>{lineChart}</Container>
    <Container>
      {/* <LineChart
        width={600}
        height={600}
        data={selected}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey='total_cases' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='date' />
        <YAxis dataKey='total_cases' />
        <Tooltip />
      </LineChart> */}

      <AreaChart
        width={730}
        height={800}
        data={selected}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickFormatter={str => {
            const date = parseISO(str)
            if (date.getDate() % 1 === 0) {
              return format(date, 'MMM, d')
            }
            return date
          }}
        />
        <YAxis
          dataKey='total_cases'
          axisLine={false}
          tickLine={false}
          tickCount={8}
        />
        <Area dataKey='total_cases' stroke='#2451b7' />
        <CartesianGrid stroke='#ccc' opacity={0.1} />
        <Tooltip />
      </AreaChart>
    </Container>
  )
}
