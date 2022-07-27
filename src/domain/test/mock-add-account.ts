import { AddAccountParamas } from '@/domain/usecases'
import faker from 'faker'

export const mockAddAccount = (): AddAccountParamas => {
  const password = faker.internet.password()

  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password
  }
}
