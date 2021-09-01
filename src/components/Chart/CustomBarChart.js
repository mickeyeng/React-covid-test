import { useEffect } from 'react'
import {
  BarChart,
  Bar,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { CustomTooltip } from './CustomTooltip'
import { format, parseISO } from 'date-fns'

export const CustomBarChart = ({ selected }) => {
  return (
    <ResponsiveContainer width='100%' height={600}>
      <BarChart width={600} height={600} data={selected}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='date'
          tickFormatter={str => {
            const date = parseISO(str)
            if (date.getDate() % 2 === 0) {
              return format(date, 'MMM, d')
            }
            return date
          }}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey='new_cases' fill='#8884d8' />
        <Bar dataKey='total_cases' fill='#82ca9d' />
      </BarChart>
    </ResponsiveContainer>
  )
}
