import React from 'react'
import { ErrorIcon } from './errorIcon'

import Styles from './input-styles.scss'

type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <div className={Styles.status}>
        <ErrorIcon />
      </div>
    </div>
  )
}

export default Input
