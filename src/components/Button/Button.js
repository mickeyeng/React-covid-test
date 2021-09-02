import { forwardRef } from 'react'
import { ButtonWrapper, ButtonText } from './Layout'

export const Button = forwardRef(({ text, handleFilterDate }, ref) => {
  return (
    <ButtonWrapper ref={ref} onClick={handleFilterDate} className={''}>
      {/* <button> */}
      <ButtonText>{text}</ButtonText>
      {/* </button> */}
    </ButtonWrapper>
  )
})
