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

export const CustomBarChart = ({ selected }) => {
  return (
    <BarChart width={600} height={600} data={selected}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='dates' />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey='new_cases' fill='#8884d8' />
      <Bar dataKey='total_cases' fill='#82ca9d' />
    </BarChart>
  )
}
