import { AccountModel } from '@/domain/models'

export type AddAccountParamas = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddAccount {
  add: (params: AddAccountParamas) => Promise<AccountModel>
}
