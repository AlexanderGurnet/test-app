import React, { ReactNode, SyntheticEvent } from 'react'

import { cn } from '@/shared/lib'

interface IProps {
  children: ReactNode
  classnames?: string
  onClick?: (e: SyntheticEvent) => void
}

export const Card = ({ children, classnames, onClick }: IProps) => {
  return (
    <div onClick={onClick} className={cn('bg-white rounded', classnames)}>
      {children}
    </div>
  )
}
