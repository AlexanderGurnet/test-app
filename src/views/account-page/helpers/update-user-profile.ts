import { ScopedMutator } from 'swr/_internal'

import { patchUser } from '@/shared/api'

const updateUserProfile = async <U, D>(mutate: ScopedMutator, route: string, user: U, data: D) => {
  const apiKey = localStorage.getItem('api-key')

  if (apiKey) {
    return await mutate(route, async () =>
      patchUser(route, {
        key: apiKey,
        body: { ...user, ...data },
      }).then((res) => res)
    )
  }
}

export default updateUserProfile
