import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { AddAccount, AddAccountParamas } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParamas
  callsCount: number = 0

  async add (params: AddAccountParamas): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
