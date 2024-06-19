'use client'

import React, { useEffect, useRef } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { usePathname, useRouter } from 'next/navigation'
import Skeleton from 'react-loading-skeleton'

import { Logo } from '../../../shared/ui/components/Logo'
import { Button } from '../../../shared/ui/components/Button'
import { getProfile } from '@/shared/api/user'
import { profileRoute, loginRoute, profilesRoute } from '@/shared/router/routes'
import { UserBlock } from '@/shared/ui'

export const Header = () => {
  const router = useRouter()
  const path = usePathname()
  const { mutate } = useSWRConfig()
  const prevPathRef = useRef(path)

  useEffect(() => {
    if (prevPathRef.current !== path) {
      mutate(profileRoute)
      prevPathRef.current = path
    }
  }, [path, mutate])

  const {
    data: user,
    isLoading,
    isValidating,
  } = useSWR(profileRoute, () => getProfile(profileRoute, { arg: localStorage.getItem('api-key') }), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  return (
    <header className="flex justify-center items-center border-b border-stroke-secondary bg-white h-[5rem]">
      <div className="flex justify-between items-center w-[80rem]">
        <div className="flex items-center">
          <Logo color="#FEFF80" route={`/${profilesRoute}`} />
          <p className="hidden lg:block md:block sm:block w-[15rem] h-[3.3rem] font-normal text-[1rem] leading-[1.7rem] text-black">
            Разрабатываем и запускаем сложные веб проекты
          </p>
        </div>
        {isLoading ? (
          !isValidating && (
            <div className="flex w-[200px] justify-center items-center mr-7">
              <Skeleton containerClassName="flex-1" count={1} height={50} />
            </div>
          )
        ) : user ? (
          <UserBlock user={user} href={`/${profileRoute}/${user.slug}`} classnames="w-[200px] md:w-fit" />
        ) : (
          <Button
            content="Войти"
            classnames={'mr-7 hover:bg-secondary'}
            clickHandler={() => router.push(`/${loginRoute}`)}
          />
        )}
      </div>
    </header>
  )
}
