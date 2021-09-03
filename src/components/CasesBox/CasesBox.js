import { StatBox, StatText, StatCount } from './Layout'
import CountUp from 'react-countup'

export const CasesBox = ({
  total,
  totalNew,
  selectedArea,
  statInfo,
  borderColor,
  newCases
}) => {
  return (
    <StatBox>
      <StatText>
        {statInfo} {selectedArea} {newCases ? 'Today' : null}
      </StatText>
      <StatCount style={{ color: total < 10 && 'rgb(130, 202, 157)' }}>
        <CountUp
          start={0}
          end={totalNew ? totalNew : total}
          // end={total}
          duration={1.75}
          separator=','
        />
      </StatCount>
    </StatBox>
  )
}
