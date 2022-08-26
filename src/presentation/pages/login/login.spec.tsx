import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Login from './login'
import { ErrorIcon } from '@/presentation/components/input/errorIcon'
import { SuccessIcon } from '@/presentation/components/input/successIcon'
import { ValidationStub } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

// factory
const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(<Login validation={validationStub} />)
  return {
    sut
  }
}

describe('Login component', () => {
  afterEach(cleanup)

  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe(validationError)

    const { container } = render(<ErrorIcon />)

    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)

    const passwordStatus = sut.getByTestId('password-status') as HTMLSpanElement
    expect(passwordStatus.title).toBe(validationError)
    expect(passwordStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe(validationError)
    const { container } = render(<ErrorIcon />)
    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const emailStatus = sut.getByTestId('password-status') as HTMLSpanElement
    expect(emailStatus.title).toBe(validationError)
    const { container } = render(<ErrorIcon />)
    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show valid email state if Validation succeeds', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe('Tudo certo')
    const { container } = render(<SuccessIcon />)
    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const passwordStatus = sut.getByTestId('password-status') as HTMLSpanElement
    expect(passwordStatus.title).toBe('Tudo certo')
    const { container } = render(<SuccessIcon />)
    expect(passwordStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should enable submit button if form is valid', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(false)
  })
})
