import { HttpPostClient } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParamas } from '@/domain/usecases'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParamas, AccountModel>
  ) {}

  async add (params: AddAccountParamas): Promise<AccountModel> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    return null
  }
}
