import { forwardRef } from 'react'
import { CustomSelect, Option, SelectDiv } from './Layout'

export const Select = forwardRef(
  ({ onChange, option1, option2, option3 }, ref) => {
    return (
      <SelectDiv>
        <CustomSelect ref={ref} onChange={onChange}>
          <Option>All</Option>
          <Option defaultValue>{option1}</Option>
          <Option>{option2}</Option>
          <Option>{option3}</Option>
        </CustomSelect>
        <span className='focus'></span>
      </SelectDiv>
    )
  }
)
