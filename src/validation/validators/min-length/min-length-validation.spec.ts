import { MinLengthValidation } from './min-length-validation'
import { InvalidErrorField } from '@/validation/errors'
import faker from 'faker'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation(faker.random.word(), 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidErrorField())
  })
})
