import React from 'react'

import { cn } from '@/shared/lib'

interface IProps {
  clickHandler?: () => void
  content: React.ReactNode
  type?: 'submit' | 'button' | 'reset'
  classnames?: string
  disabled?: boolean
}

export const Button = ({ clickHandler, classnames, content, type = 'button', disabled = false }: IProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={clickHandler}
      className={cn('py-2 px-8 transition-colors rounded border text-black border-stroke-primary', classnames)}
    >
      {content}
    </button>
  )
}
