import { StatBox, StatText, StatCount } from './Layout'

export const CasesBox = ({ total, selectedArea, statInfo }) => {
  //   const totalCases = selected[selected.length - 1].total_cases

  return (
    <StatBox>
      <StatText>
        {statInfo} {selectedArea}
      </StatText>
      <StatCount>{total}</StatCount>
    </StatBox>
  )
}
