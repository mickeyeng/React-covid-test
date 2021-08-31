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
  // debugger
  return (
    <div style={{ width: '100%' }}>
      <h4>New cases</h4>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          width={500}
          height={200}
          data={selected}
          syncId='anyId'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
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
          <Area
            type='monotone'
            dataKey='new_cases'
            stroke='#8884d8'
            fill='#8884d8'
          />
        </AreaChart>
      </ResponsiveContainer>
      <h4>Total Cases</h4>

      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          width={500}
          height={200}
          data={selected}
          syncId='anyId'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
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
          <Area
            type='monotone'
            dataKey='total_cases'
            stroke='#82ca9d'
            fill='#82ca9d'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
