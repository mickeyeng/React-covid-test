import { forwardRef } from 'react'
import { ButtonWrapper, ButtonText } from './Layout'

export const Button = forwardRef(({ text, handleFilterDate }, ref) => {
  return (
    <ButtonWrapper tabIndex='0' ref={ref} onClick={handleFilterDate}>
      {text}
    </ButtonWrapper>
  )
})
