'use client'

import useSWR, { useSWRConfig } from 'swr'
import React, { useEffect, useState } from 'react'

import { getProfile } from '@/shared/api/user'
import { profileRoute } from '@/shared/router'
import { IImage, IUser } from '@/shared/types'
import { Avatar, Button, Modal } from '@/shared/ui'
import { Icon } from '@/shared/ui/icons'
import { IconName } from '@/shared/ui/icons/Icon'
import { ModalContent } from './ModalContent'
import updateUserProfile from '../helpers/update-user-profile'
import { useImage } from '@/shared/helpers/hooks/use-image'

interface IProps {
  user: IUser
}

export const AccountPage = ({ user }: IProps) => {
  const { mutate } = useSWRConfig()
  const [imageObj, setImageObj] = useState<IImage | undefined>(undefined)
  const [backgroundImageObj, setBackgroundImageObj] = useState<IImage | undefined>(undefined)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: viewer } = useSWR(
    profileRoute,
    () => getProfile(profileRoute, { arg: localStorage.getItem('api-key') }),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  const isViewersAccount = viewer?.slug === user.slug
  const userOfThePage = isViewersAccount ? viewer : user

  const handleBackgroundImageSet = (image: IImage) => {
    setBackgroundImageObj(image)
  }

  const { isMutating, fileInputRef, handleImageClick, handleFileChange } = useImage(handleBackgroundImageSet)

  useEffect(() => {
    if (imageObj) {
      updateUserProfile(mutate, profileRoute, user, { imageId: imageObj.id })
    }
  }, [imageObj, mutate, user])

  useEffect(() => {
    if (backgroundImageObj) {
      updateUserProfile(mutate, profileRoute, user, { coverId: backgroundImageObj.id })
    }
  }, [backgroundImageObj, mutate, user])

  const handleDeleteBackground = () => {
    updateUserProfile(mutate, profileRoute, user, { coverId: null })
  }

  const handleImageSet = (image: IImage) => {
    setImageObj(image)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('api-key')
    window.location.reload()
  }

  return (
    <section className="block h-[calc(100vh - 80px)] overflow-hidden">
      <div
        style={{ backgroundImage: userOfThePage.cover ? `url(${userOfThePage?.cover?.url})` : '' }}
        className="group flex justify-center items-center w-full h-[200px] bg-secondary border-b border-b-stroke-secondary bg-cover bg-no-repeat"
      >
        <div className="cursor-pointer">
          <input
            type="file"
            name="file"
            hidden
            ref={fileInputRef}
            onChange={isViewersAccount ? handleFileChange : () => void 0}
            style={{ display: 'none' }}
          />
          {isViewersAccount && (
            <>
              {isMutating ? (
                <div className="loader"></div>
              ) : !userOfThePage.cover ? (
                <Button
                  clickHandler={() => handleImageClick(isViewersAccount)}
                  classnames="group-hover:visible group-hover:flex hidden justify-between items-center font-medium px-5 py-1.5 w-48 h-10 bg-white border border-stroke-primary rounded cursor-pointer hover:bg-secondary transition"
                  content={
                    <>
                      <Icon name={IconName.UPLOAD} fill="black" />
                      Загрузить
                      <Icon name={IconName.PICTURE} fill="black" />
                    </>
                  }
                />
              ) : (
                <Button
                  clickHandler={handleDeleteBackground}
                  classnames="group-hover:visible group-hover:flex hidden justify-between items-center font-medium px-5 py-1.5 w-48 h-10 bg-white border border-stroke-primary rounded cursor-pointer hover:bg-secondary transition"
                  content={
                    <>
                      <Icon name={IconName.BIN} fill="black" />
                      Удалить
                      <Icon name={IconName.PICTURE} fill="black" />
                    </>
                  }
                />
              )}
            </>
          )}
        </div>
      </div>
      <div className="h-max m-auto max-w-[860px] px-[30px] relative">
        <Avatar
          size="large"
          user={userOfThePage}
          setImage={handleImageSet}
          classnames={'absolute top-[-150px]'}
          isPictureSettable={isViewersAccount}
        />
        <div className="flex justify-between mt-[100px] gap-3 flex-col sm:flex-row sm:gap-0">
          <div className="flex flex-col gap-3">
            <h2 className="max-w-[600px] h-[42px] font-medium text-[30px] leading-[42px] text-black text-ellipsis overflow-hidden whitespace-nowrap">
              {user?.name}
            </h2>
            <h3 className="max-w-[600px] h-[26px] font-normal text-base text-gray">{user?.email}</h3>
          </div>
          {isViewersAccount ? (
            <Button
              clickHandler={handleOpenModal}
              classnames="relative flex justify-between items-center font-medium px-5 py-1.5 w-48 h-10 bg-white border border-stroke-primary rounded cursor-pointer hover:bg-secondary transition"
              content={
                <>
                  <div className="absolute top-[50%] left-[25px] translate-y-[-50%]">
                    <Icon name={IconName.EDIT} fill="black" />
                  </div>
                  <span className="ml-[36px]">Редактировать</span>
                </>
              }
            />
          ) : null}
        </div>
        <div className="max-w-[600px] text-base text-black whitespace-pre-line break-words mt-8">
          {user?.description}
        </div>
        {isViewersAccount ? (
          <Button
            clickHandler={handleLogout}
            classnames="relative flex justify-between items-center mt-12 mb-[30px] font-medium py-2 px-6 h-10 bg-white border border-stroke-primary rounded cursor-pointer hover:bg-secondary transition"
            content={
              <>
                <div className="absolute top-[50%] left-[25px] translate-y-[-50%]">
                  <Icon name={IconName.EXIT} fill="black" />
                </div>
                <span className="ml-[36px]">Выйти</span>
              </>
            }
          />
        ) : null}
      </div>
      <Modal isModalOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent onClose={handleCloseModal} user={viewer} />
      </Modal>
    </section>
  )
}
