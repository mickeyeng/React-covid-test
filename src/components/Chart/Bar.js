export const Bar = () => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' fill='#8884d8' />
      <Bar dataKey='uv' fill='#82ca9d' />
    </BarChart>
  )
}
