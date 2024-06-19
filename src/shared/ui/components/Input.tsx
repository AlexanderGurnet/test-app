'use client'

import React, { useState } from 'react'
import { UseFormRegister, FieldErrors, FieldError } from 'react-hook-form'

import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui/icons'
import { IconName } from '@/shared/ui/icons/Icon'

interface IProps {
  name: string
  placeholder: string
  register: UseFormRegister<any>
  errors: FieldErrors
  type?: 'email' | 'password' | 'text'
  icon?: React.ReactElement
  slug?: string
  defaultValue?: string
}

/**
 *
 * @param slug this is a string no more than 12 characters long
 * @returns
 */
export const Input = ({ icon, name, placeholder, register, errors, type = 'text', slug, defaultValue }: IProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type
  const errorMessage = (errors[name] as FieldError)?.message

  return (
    <div className="w-full">
      <div className="relative w-full">
        {icon && (
          <div className="absolute top-[50%] translate-y-[-50%] flex justify-center items-center w-5 left-6 pointer-events-none">
            {icon}
          </div>
        )}
        {slug && (
          <div className="absolute text-base text-gray bg-secondary top-[50%] translate-y-[-50%] w-[145px] h-full rounded-ss-md rounded-es-md border-r border-stroke-primary pointer-events-none flex justify-center items-center">
            {slug.slice(0, 12)}
          </div>
        )}
        <input
          type={inputType}
          defaultValue={defaultValue}
          {...register(name)}
          className={cn(
            'block pl-14 pr-5 py-3 w-full text-black focus:outline-[#838383]  outline outline-[#D4D4D4] rounded-md',
            { 'pl-5': !icon },
            { 'pl-[165px]': slug },
            { 'pr-14': type === 'password' }
          )}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <div
            className="absolute right-5 top-[50%] translate-y-[-50%] cursor-pointer"
            onClick={handleToggleVisibility}
          >
            <Icon name={IconName.EYE} fill={isPasswordVisible ? '#000' : '#838383'} />
          </div>
        )}
      </div>
      <div className="relative">
        {errors && errors?.[name] && typeof errorMessage === 'string' && (
          <p className="absolute text-center font-mono font-bold w-full text-[10px] text-error">{errorMessage}</p>
        )}
      </div>
    </div>
  )
}
