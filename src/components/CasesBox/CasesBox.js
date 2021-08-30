import { Container } from './Layout'

export const CasesBox = ({ total, selectedArea }) => {
  //   const totalCases = selected[selected.length - 1].total_cases

  return (
    <Container>
      <h3>{selectedArea}</h3>
      <h3>Total Cases: {total}</h3>
    </Container>
  )
}
