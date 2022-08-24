import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'
import { ErrorIcon } from '@/presentation/components/input/errorIcon'

type SutTypes = {
  sut: RenderResult
}
// factory
const makeSut = (): SutTypes => {
  const sut = render(<Login />)

  return {
    sut
  }
}

describe('Login component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe('Campo obrigatório')

    const { container } = render(<ErrorIcon />)

    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)

    const passwordStatus = sut.getByTestId('password-status') as HTMLDivElement
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })
})
