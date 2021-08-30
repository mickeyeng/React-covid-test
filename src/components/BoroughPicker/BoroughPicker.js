import React, { useRef } from 'react'

export const BoroughPicker = ({ handleBoroughPicker, boroughList }) => {
  const selectRef = useRef()
  return (
    <div>
      <select
        onChange={() => handleBoroughPicker(selectRef.current.value)}
        ref={selectRef}
        name=''
        id=''
      >
        {boroughList.map(borough => {
          return (
            <option defaultValue={borough} key={borough}>
              {borough}
            </option>
          )
        })}
      </select>
    </div>
  )
}
