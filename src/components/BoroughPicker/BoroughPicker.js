import React from 'react'

export const BoroughPicker = ({ data }) => {
  const boroughList = data && data.map(data => data.area_name)
  const removeDuplicates = [...new Set(boroughList)].map(borough => {
    return <option>{borough}</option>
  })

  return (
    <div>
      <select name='' id=''>
        {removeDuplicates}
      </select>
    </div>
  )
}
