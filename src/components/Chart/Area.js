const AreaChart = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={rangeData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <XAxis dataKey='day' />
      <YAxis />
      <Area dataKey='temperature' stroke='#8884d8' fill='#8884d8' />
      <Tooltip />
    </AreaChart>
  )
}
