import React from 'react'
import Link from 'next/link'

import { Avatar } from '@/shared/ui'
import { IUser } from '@/shared/types'
import { cn } from '@/shared/lib'

interface IProps {
  user: IUser | undefined
  href: string
  classnames?: string
}

export const UserBlock = ({ user, href, classnames }: IProps) => {
  return (
    <Link href={href} className={cn('flex justify-end items-center gap-5 mr-7 cursor-pointer', classnames)}>
      <p className="text-base font-normal text-black overflow-hidden whitespace-nowrap text-ellipsis md:overflow-visible">
        {user?.name}
      </p>
      <Avatar size="small" user={user} />
    </Link>
  )
}
