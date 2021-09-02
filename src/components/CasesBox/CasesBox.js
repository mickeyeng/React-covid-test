import { StatBox, StatText, StatCount } from './Layout'
import { RiHealthBookLine } from 'react-icons/ri'
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
    // <StatBox style={{ borderTop: `4px solid ${borderColor}` }}>
    <StatBox style={{ borderTop: `4px solid #0F52BA` }}>
      <StatText>
        {statInfo} {selectedArea} {newCases ? 'Today' : null}
      </StatText>
      <StatCount>
        <CountUp
          start={0}
          end={totalNew ? totalNew : total}
          duration={1.75}
          separator=','
        />
      </StatCount>

      {/* <RiHealthBookLine size={'2em'} /> */}
    </StatBox>
  )
}
