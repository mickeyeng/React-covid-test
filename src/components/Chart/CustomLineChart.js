import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'
import { CustomTooltip } from './CustomTooltip'
import { format, parseISO } from 'date-fns'
import { renderLegend } from './CustomLegend'

export const CustomLineChart = ({ selected }) => {
  return (
    <ResponsiveContainer width='100%' height={600}>
      <LineChart
        data={selected}
        margin={{ top: 5, right: 5, bottom: 10, left: 0 }}
      >
        <Line type='monotone' dataKey='total_cases' stroke='#0F52BA' />
        <Line type='monotone' dataKey='new_cases' stroke='#82ca9d' />
        <CartesianGrid
          opacity={0.4}
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
        <Legend content={renderLegend} />
        <YAxis
          dataKey='total_cases'
          axisLine={false}
          tickLine={false}
          tickCount={8}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  )
}
