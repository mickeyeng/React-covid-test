import { TooltipContainer } from './Layout'
import { format, parseISO } from 'date-fns'

export const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <TooltipContainer>
        <h4>
          {payload ? payload[0].payload.area_name : 'Error fetching area name'}
        </h4>
        <p>
          {payload[0].payload.date &&
            format(parseISO(payload[0].payload.date), 'eeee, d, MMM, yyyy')}
        </p>
        <p>
          Total Cases:{' '}
          {payload
            ? payload[0].payload.total_cases
            : 'Error fetching total cases'}
        </p>
        <p>
          New cases:{' '}
          {payload ? payload[0].payload.new_cases : 'Error fetching new cases'}
        </p>
      </TooltipContainer>
    )
  } else {
    return null
  }
}
