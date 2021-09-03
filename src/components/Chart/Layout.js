import styled from 'styled-components'

export const ChartWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;
`

export const TooltipContainer = styled.div`
  font-size: var(--medium-font-size);
  border-radius: 0.25rem;
  background: #26313c;
  color: #fff;
  padding: var(--spacing-normal);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  text-align: center;
`

export const LegendWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 10px;
  display: inline;
  margin: 2px;

  p {
    padding: 8px;
  }
`
