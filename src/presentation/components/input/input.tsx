import React from 'react'
import { ErrorIcon } from './errorIcon'

import Styles from './input-styles.scss'

type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

const Input: React.FC<InputProps> = (props: InputProps) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <div className={Styles.status}>
        <ErrorIcon />
      </div>
    </div>
  )
}

export default Input
