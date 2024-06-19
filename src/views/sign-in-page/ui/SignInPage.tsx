'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { yupResolver } from '@hookform/resolvers/yup'

import { signIn } from '@/shared/api'
import { SignInDTO, SignInRDO } from '@/shared/types'
import { Input, Card, Button } from '@/shared/ui'
import { Icon } from '@/shared/ui/icons'
import { IconName } from '@/shared/ui/icons/Icon'
import { authRoute, loginRoute, profilesRoute } from '@/shared/router/routes'
import { Heading } from '@/shared/ui/components/Heading'
import { signInSchema } from '../lib/yup-sign-in-schema'

type FormValues = SignInDTO

export function SignInPage() {
  const router = useRouter()
  const { data, error, trigger, isMutating } = useSWRMutation<SignInRDO, Error, string, SignInDTO, SignInRDO>(
    `${authRoute}/${loginRoute}`,
    signIn
  )

  useEffect(() => {
    if (data) {
      localStorage.setItem('api-key', data.value)
      router.push(`/${profilesRoute}`)
    }
  }, [data, router])

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({ mode: 'onSubmit', resolver: yupResolver(signInSchema) })

  const onSubmit: SubmitHandler<FormValues> = (data) => trigger(data)

  return (
    <section className="flex justify-center items-center h-[calc(100vh-152px)] bg-[#f3f3f3]">
      <Card classnames={'sm:w-[400px] p-[30px] w-full h-[calc(100vh-152px)] sm:h-fit'}>
        <Heading text="Вход в Yoldi Agency" level={2} />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col gap-4 sm:w-[330px] w-full">
            <Input
              type="email"
              name="email"
              errors={errors}
              register={register}
              placeholder="E-mail"
              icon={<Icon name={IconName.EMAIL} fill="#000" />}
            />
            <Input
              type="password"
              name="password"
              errors={errors}
              register={register}
              placeholder="Пароль"
              icon={<Icon name={IconName.LOCK} fill="#000" />}
            />
          </div>
          <Button
            type="submit"
            disabled={!isDirty || !isValid}
            content={isMutating ? <span className="loader" /> : <span>Войти</span>}
            classnames="w-full px-8 py-3 min-h-[50px] relative rounded cursor-pointer text-white bg-black disabled:cursor-not-allowed disabled:text-secondary disabled:bg-stroke-primary"
          />
        </form>
        {error && (
          <div className="relative">
            <p className="absolute text-center w-full font-mono font-bold text-error text-[12px]">{error?.message}</p>
          </div>
        )}
      </Card>
    </section>
  )
}
