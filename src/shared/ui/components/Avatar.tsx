'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui/icons'
import { IconName } from '@/shared/ui/icons/Icon'
import { IImage, IUser } from '@/shared/types'
import { useImage } from '@/shared/helpers/hooks/use-image'

interface IProps {
  size?: 'small' | 'large'
  classnames?: string
  user?: IUser
  setImage?: (image: IImage) => void
  isPictureSettable?: boolean
}

export const Avatar = ({ size = 'small', user, classnames, setImage, isPictureSettable = true }: IProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (user?.image?.url) setImageSrc(user?.image?.url)
  }, [user?.image?.url])

  const { isMutating, fileInputRef, handleImageClick, handleFileChange } = useImage(setImage)

  const isLarge = size === 'large'
  const isSmall = size === 'small'

  return (
    <div
      className={cn(
        'relative border border-stroke-secondary bg-secondary rounded-full flex justify-center items-center overflow-hidden',
        { 'min-h-[50px] min-w-[50px]': isSmall },
        { 'min-h-[100px] min-w-[100px]': isLarge },
        { 'cursor-pointer': isPictureSettable },
        classnames
      )}
      onMouseEnter={isLarge ? () => setIsHovered(true) : () => void 0}
      onMouseLeave={isLarge ? () => setIsHovered(false) : () => void 0}
      onClick={isLarge ? () => handleImageClick(isPictureSettable) : () => void 0}
    >
      <input
        type="file"
        name="file"
        hidden
        ref={fileInputRef}
        onChange={isPictureSettable ? handleFileChange : () => void 0}
        style={{ display: 'none' }}
      />
      {isMutating && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
      {isHovered && isPictureSettable && (
        <div className="absolute w-full h-full bg-black flex justify-center items-center">
          <Icon name={IconName.CAMERA} fill="white" />
        </div>
      )}
      {imageSrc && (
        <Image
          width={isSmall ? 50 : 100}
          height={isSmall ? 50 : 100}
          src={imageSrc}
          alt="avatar"
          className={cn(
            'rounded-full object-cover',
            { 'max-h-[50px] max-w-[50px] min-h-[50px] min-w-[50px]': isSmall },
            { 'h-[100px] w-[100px]': isLarge }
          )}
        />
      )}
      {!imageSrc && (
        <span className={cn('font-normal text-black', { 'text-[18px]': isSmall }, { 'text-[36px]': isLarge })}>
          {user?.name[0]}
        </span>
      )}
    </div>
  )
}
