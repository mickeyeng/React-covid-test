import React, { useEffect } from 'react'
import { Container } from './Layout'
import { CustomLineChart } from './CustomLineChart'
import { CustomBarChart } from './CustomBarChart'
import { CustomAreaChart } from './CustomAreaChart'

export const Chart = ({
  data = [],
  selectedArea = 'Camden',
  selected,
  selectArea,
  filteredData,
  selectGraph
}) => {
  useEffect(() => {
    selectArea(selectedArea)
  }, [data, filteredData])

  console.log('selected', selected)
  const handleSelectedChart = () => {
    if (selectGraph === 'Bar') {
      return <CustomBarChart selected={selected} />
    } else if (selectGraph === 'Line') {
      return <CustomLineChart selected={selected} />
    } else if (selectGraph === 'Area') {
      return <CustomAreaChart selected={selected} />
    } else {
      return <CustomLineChart selected={selected} />
    }
  }

  return <Container>{handleSelectedChart()}</Container>
}
