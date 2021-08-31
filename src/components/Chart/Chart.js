import React, { useEffect } from 'react'
import { ChartWrapper } from './Layout'
import { CustomLineChart } from './CustomLineChart'
import { CustomBarChart } from './CustomBarChart'
import { CustomAreaChart } from './CustomAreaChart'

export const Chart = ({
  selectedArea = 'Camden',
  selected,
  selectArea,
  selectGraph
}) => {
  useEffect(() => {
    selectArea(selectedArea)
  }, [selectedArea, selectArea])

  console.log()

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

  return <ChartWrapper>{handleSelectedChart()}</ChartWrapper>
}
