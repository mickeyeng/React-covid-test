import React, { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  ReferenceLine,
  BarChart,
  Bar,
  Scatter,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  ScatterChart,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { format, parseISO, subDays } from 'date-fns'
import { Container, TooltipContainer } from './Layout'
import { CustomTooltip } from './CustomTooltip'
// import { Bar, Line } from 'react-chartjs-2'

export const Chart = ({
  data = [],
  selectedArea = 'Camden',
  selected,
  selectArea,
  filteredData
}) => {
  const dates = data.map(data => data.date)
  const totalCases = selected.map(data => data.total_cases)
  const newCases = selected.map(data => data.new_cases)

  useEffect(() => {
    selectArea(selectedArea)
  }, [data, filteredData])

  console.log('selected', selected)

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
        <Line type='monotone' dataKey='new_cases' stroke='#82ca9d' />
        <CartesianGrid
          opacity={0.5}
          vertical={false}
          stroke='#ccc'
          strokeDasharray='5 5'
        />
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickFormatter={str => {
            const date = parseISO(str)
            if (date.getDate() % 2 === 0) {
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
        <Tooltip content={<CustomTooltip />} />
      </LineChart> */}

      <BarChart width={600} height={600} data={selected}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='dates' />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey='new_cases' fill='#8884d8' />
        <Bar dataKey='total_cases' fill='#82ca9d' />
      </BarChart>
    </Container>
  )
}

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active) {
//     return (
//       <TooltipContainer>
//         <h4>{payload[0].payload.area_name}</h4>
//         <p>{format(parseISO(label), 'eeee, d, MMM, yyyy')}</p>
//         <p>Total Cases: {payload[0].payload.total_cases}</p>
//         <p>New cases: {payload[0].payload.new_cases}</p>
//       </TooltipContainer>
//     )
//   } else {
//     return null
//   }
// }
