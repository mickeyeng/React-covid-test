import React, { useRef } from 'react'

export const BoroughPicker = ({ data, handleBoroughPicker }) => {
  const selectRef = useRef()
  const boroughList = data && data.map(data => data.area_name)
  const removeDuplicates = [...new Set(boroughList)].map(borough => {
    return <option>{borough}</option>
  })

  //   let currentArea = null

  return (
    <div>
      <select
        onChange={() => handleBoroughPicker(selectRef.current.value)}
        ref={selectRef}
        name=''
        id=''
      >
        {removeDuplicates}
      </select>
    </div>
  )
}
