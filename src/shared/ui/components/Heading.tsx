import React from 'react'

import { cn } from '@/shared/lib'

interface IProps {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  classnames?: string
}

export const Heading = ({ text, level, classnames }: IProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag className={cn(' font-medium text-[30px] leading-[42px] max-w-[250px] mb-[24px]', classnames)}>
      {text}
    </HeadingTag>
  )
}
