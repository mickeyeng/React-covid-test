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
import { renderLegend } from './CustomLegend'

export const CustomBarChart = ({ selected }) => {
  return (
    <ResponsiveContainer width='100%' height={600}>
      <BarChart data={selected}>
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
        <Legend content={renderLegend} />
        <Bar dataKey='new_cases' fill='#0F52BA' />
        <Bar dataKey='total_cases' fill='#d03737' />
      </BarChart>
    </ResponsiveContainer>
  )
}
