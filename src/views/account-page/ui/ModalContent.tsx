import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useSWRConfig } from 'swr'

import { Button, Card, Input } from '@/shared/ui'
import { Heading } from '@/shared/ui/components/Heading'
import { IUser } from '@/shared/types'
import { profileRoute } from '@/shared/router'
import { patchUser } from '@/shared/api'
import editFormSchema from '../lib/yup-edit-schema'

interface IProps {
  onClose: () => void
  user: IUser | undefined
}

export const ModalContent = ({ onClose, user }: IProps) => {
  const [apiError, setApiError] = useState<string>('')
  const { mutate } = useSWRConfig()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(editFormSchema) })

  const onSubmit: SubmitHandler<Partial<IUser>> = (data) => {
    const apiKey = localStorage.getItem('api-key')

    if (apiKey) {
      mutate(profileRoute, async () => patchUser(profileRoute, { key: apiKey, body: { ...user, ...data } }))
        .then(() => {
          onClose()
          router.push(`${data.slug}`)
          router.refresh()
        })
        .catch((err) => setApiError(err.message))
    }
  }

  return (
    <Card
      onClick={(e) => e.stopPropagation()}
      classnames="sm:w-[600px] p-[30px] sm:mt-0 w-full h-full sm:h-auto overflow-auto rounded-none sm:rounded-md"
    >
      <Heading text="Редактировать профиль" level={4} classnames="max-w-full" />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="font-medium text-base text-gray mb-1">Имя</p>
          <Input name={'name'} placeholder="" register={register} errors={errors} defaultValue={user?.name} />
        </div>
        <div>
          <p className="font-medium text-base text-gray mb-1">Адрес профиля</p>
          <Input
            name={'slug'}
            placeholder=""
            register={register}
            errors={errors}
            slug={'example.com/'}
            defaultValue={user?.slug}
          />
        </div>
        <div>
          <p className="font-medium text-base text-gray mb-1">Описание</p>
          <textarea
            defaultValue={user?.description}
            {...register('description')}
            className={
              'block pl-5 pr-5 py-3 w-full min-h-[185px] resize-none text-black focus:outline-[#838383]  outline outline-stroke-primary rounded-md'
            }
          />
        </div>
        <div className="flex gap-[10px]">
          <Button content="Отмена" classnames="w-[50%] h-[50px] hover:bg-secondary transition" clickHandler={onClose} />
          <Button
            type="submit"
            content="Сохранить"
            classnames="w-[50%] bg-black text-white h-[50px] hover:opacity-80 transition"
          />
        </div>
        {apiError && (
          <div className="relative">
            <p className="absolute text-center w-full font-mono font-bold text-error text-[12px]">{apiError}</p>
          </div>
        )}
      </form>
    </Card>
  )
}
