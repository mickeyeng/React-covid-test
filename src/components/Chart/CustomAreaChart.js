import {
  AreaChart,
  Area,
  ReferenceLine,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { format, parseISO } from 'date-fns'
import { CustomTooltip } from './CustomTooltip'

export const CustomAreaChart = ({ selected }) => {
  return (
    <>
      <AreaChart
        width={600}
        height={600}
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
        <Area dataKey='total_cases' stroke='#2451b7' />
        <CartesianGrid stroke='#ccc' opacity={0.1} />
      </AreaChart>
    </>
  )
}
