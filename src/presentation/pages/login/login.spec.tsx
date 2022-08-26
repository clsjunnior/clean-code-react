import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Login from './login'
import { ErrorIcon } from '@/presentation/components/input/errorIcon'
import { SuccessIcon } from '@/presentation/components/input/successIcon'
import { ValidationStub } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
}

// factory
const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = faker.random.words()
  const sut = render(<Login validation={validationStub} />)
  return {
    sut,
    validationStub: validationStub
  }
}

describe('Login component', () => {
  afterEach(cleanup)

  test('Should start with initial state', () => {
    const { sut, validationStub: validationSpy } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe(validationSpy.errorMessage)

    const { container } = render(<ErrorIcon />)

    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)

    const passwordStatus = sut.getByTestId('password-status') as HTMLSpanElement
    expect(passwordStatus.title).toBe(validationSpy.errorMessage)
    expect(passwordStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show email error if Validation fails', () => {
    const { sut, validationStub } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe(validationStub.errorMessage)
    const { container } = render(<ErrorIcon />)
    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show password error if Validation fails', () => {
    const { sut, validationStub } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const emailStatus = sut.getByTestId('password-status') as HTMLSpanElement
    expect(emailStatus.title).toBe(validationStub.errorMessage)
    const { container } = render(<ErrorIcon />)
    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show valid email state if Validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status') as HTMLSpanElement
    expect(emailStatus.title).toBe('Tudo certo')
    const { container } = render(<SuccessIcon />)
    expect(emailStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })

  test('Should show valid password state if Validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.email() } })
    const passwordStatus = sut.getByTestId('password-status') as HTMLSpanElement
    expect(passwordStatus.title).toBe('Tudo certo')
    const { container } = render(<SuccessIcon />)
    expect(passwordStatus.innerHTML).toBe(container.querySelector('svg').outerHTML)
  })
})
