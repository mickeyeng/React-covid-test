import { StatBox, StatText, StatCount } from './Layout'
import { RiHealthBookLine } from 'react-icons/ri'
import CountUp from 'react-countup'

export const CasesBox = ({ total, selectedArea, statInfo }) => {
  //   const totalCases = selected[selected.length - 1].total_cases

  return (
    <StatBox>
      <StatText>
        {statInfo} {selectedArea}
      </StatText>
      <StatCount>
        <CountUp start={0} end={total} duration={1.75} separator=',' />
      </StatCount>

      <RiHealthBookLine size={'2em'} />
    </StatBox>
  )
}
