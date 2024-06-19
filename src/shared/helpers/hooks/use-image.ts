import { useEffect, useRef } from 'react'
import useSWRMutation from 'swr/mutation'

import { uploadImage } from '@/shared/api'
import { imageRoute } from '@/shared/router'
import { IImage } from '@/shared/types'

export const useImage = (setImage: ((I: IImage) => void) | undefined) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { data: newlySetImageObj, isMutating, trigger: triggerUploadImage } = useSWRMutation(imageRoute, uploadImage)

  useEffect(() => {
    if (newlySetImageObj && setImage) {
      setImage(newlySetImageObj)
    }
  }, [newlySetImageObj, setImage])

  const handleImageClick = (isPictureSettable: boolean) => {
    if (fileInputRef.current && isPictureSettable) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0]
    const formData = new FormData()

    if (image) {
      formData.append('file', image, image.name)
      triggerUploadImage(formData).then(() => {
        event.target.value = ''
      })
    }
  }

  return {
    isMutating,
    fileInputRef,
    handleImageClick,
    handleFileChange,
  }
}
