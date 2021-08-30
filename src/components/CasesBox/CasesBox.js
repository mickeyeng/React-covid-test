import { Container } from './Layout'

export const CasesBox = ({ selected = [], selectedArea }) => {
  //   const totalCases = selected[selected.length - 1].total_cases

  return (
    <Container>
      <h3>{selectedArea}</h3>
      {/* <h3>{totalCases}</h3> */}
    </Container>
  )
}
