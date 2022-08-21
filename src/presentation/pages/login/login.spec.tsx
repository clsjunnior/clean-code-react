import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'
import { ErrorIcon } from '@/presentation/components/input/errorIcon'

describe('Login component', () => {
  test('Should start with initial state', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatus = getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe('Campo obrigatório')

    const { container } = render(<ErrorIcon />)

    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)

    const passwordStatus = getByTestId('password-status') as HTMLDivElement
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })
})
