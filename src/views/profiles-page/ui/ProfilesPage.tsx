'use client'

import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'

import { profileRoute, userRoute } from '@/shared/router'
import { Avatar } from '@/shared/ui'
import { getUsers } from '@/shared/api/user'
import 'react-loading-skeleton/dist/skeleton.css'

export const ProfilesPage = () => {
  const { data, isLoading } = useSWR(userRoute, getUsers)

  return (
    <section className="flex justify-center h-[calc(100vh-80px)]">
      <div className="h-[calc(100vh-220px)] w-[810px] m-[50px_10px_50px_20px]">
        <h1 className="font-medium text-2xl leading-[42px] mb-[29px]">Список аккаунтов</h1>
        <div className="h-[calc(100%-100px)] overflow-y-auto overflow-x-hidden snap-x snap-proximity">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Skeleton containerClassName="flex-1" count={7} height={70} />
            </div>
          ) : (
            data?.map((user) => (
              <Link
                href={`/${profileRoute}/${user.slug}`}
                key={user.slug}
                className="relative flex items-center cursor-pointer h-[70px] border-t border-[#e6e6e6] last:border-b"
              >
                <Avatar user={user} size="small" />
                <div className="flex justify-between w-full ml-[20px] flex-col lg:flex-row md:flex-row sm:flex-row">
                  <div className="w-[200px] font-medium text-sm leading-6 text-black whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.name}
                  </div>
                  <div className="whitespace-nowrap font-normal text-sm leading-6 text-[#838383] overflow-hidden text-ellipsis">
                    {user.email}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
