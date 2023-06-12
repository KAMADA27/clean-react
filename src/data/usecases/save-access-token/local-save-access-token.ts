import { SaveAccessToken } from '@/domain/usecases/update-current-account'
import { SetStorage } from '@/data/protocols/cache/setStorage'
import { UnexpectedError } from '@/domain/errors'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorage: SetStorage) {}

  async save (accessToken: string): Promise<void> {
    if (!accessToken) {
      throw new UnexpectedError()
    }
    await this.setStorage.set('accessToken', accessToken)
  }
}
