import { LegendWrapper } from './Layout'

export const renderLegend = props => {
  const { payload } = props
  return (
    <>
      {payload.map((entry, index) => {
        const caseName =
          entry.dataKey.split('_').join(' ').charAt(0).toUpperCase() +
          entry.dataKey.split('_').join(' ').slice(1)
        return (
          <LegendWrapper key={`item-${index}`}>
            <p style={{ background: entry.color }}>{caseName}</p>
          </LegendWrapper>
        )
      })}
    </>
  )
}
