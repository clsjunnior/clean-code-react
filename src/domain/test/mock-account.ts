import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '../models'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.random.alphaNumeric()
  }
}
