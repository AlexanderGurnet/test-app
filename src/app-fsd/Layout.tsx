'use client'

import { Footer, Header } from '@/widgets'
import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
