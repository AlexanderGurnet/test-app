import React from 'react'

interface IProps {
  isModalOpen: boolean
  modalContent?: any
  onClose?: () => void
  children: React.ReactNode
}

export const Modal = ({ isModalOpen, children, onClose }: IProps) => {
  if (isModalOpen !== true) {
    return null
  }

  return (
    <article
      className="w-screen h-screen sm:fixed absolute inset-0 m-auto sm:bg-backdrop mt-[80px] sm:mt-0 bg-transparent z-50 flex justify-center items-center"
      onClick={onClose}
    >
      {children}
    </article>
  )
}

export default Modal
