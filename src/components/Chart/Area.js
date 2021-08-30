export const AreaChart = data => {
  return (
    <>
      <AreaChart
        width={730}
        height={800}
        data={selected}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickFormatter={str => {
            const date = parseISO(str)
            if (date.getDate() % 2 === 0) {
              return format(date, 'MMM, d')
            }
            return date
          }}
        />
        <YAxis
          dataKey='total_cases'
          axisLine={false}
          tickLine={false}
          tickCount={8}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area dataKey='total_cases' stroke='#2451b7' />
        <CartesianGrid stroke='#ccc' opacity={0.1} />
      </AreaChart>
    </>
  )
}
