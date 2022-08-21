import React, { useContext } from 'react'
import { ErrorIcon } from './errorIcon'

import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>
/* eslint-disable react/prop-types */
const Input: React.FC<InputProps> = (props: InputProps) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): React.ReactElement => {
    return <ErrorIcon />
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
