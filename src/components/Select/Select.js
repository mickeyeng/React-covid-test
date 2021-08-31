import { forwardRef } from 'react'
import { CustomSelect, Option } from './Layout'

export const Select = forwardRef(
  ({ onChange, option1, option2, option3 }, ref) => {
    return (
      <CustomSelect ref={ref} onChange={onChange}>
        <Option defaultValue>All</Option>
        <Option>{option1}</Option>
        <Option>{option2}</Option>
        <Option>{option3}</Option>
      </CustomSelect>
    )
  }
)
