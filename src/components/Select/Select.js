import { forwardRef } from 'react'
import { CustomSelect, Option, SelectDiv } from './Layout'

export const Select = forwardRef(
  ({ onChange, option1, option2, option3 }, ref) => {
    return (
      <SelectDiv tabIndex={0}>
        <CustomSelect ref={ref} onChange={onChange}>
          {/* <Option tabIndex={0}>All</Option> */}
          <Option tabIndex={0} defaultValue>
            {option1}
          </Option>
          <Option tabIndex={0}>{option2}</Option>
          <Option tabIndex={0}>{option3}</Option>
        </CustomSelect>
        <span className='focus'></span>
      </SelectDiv>
    )
  }
)
