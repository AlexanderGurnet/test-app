import axios, { AxiosError, AxiosResponse } from 'axios'

import { api } from './axios-instance'
import { SignInDTO, SignInRDO, SignUpDTO, SignUpRDO } from '../types/types'

export const signUp = async (route: string, { arg }: { arg: SignUpDTO }): Promise<SignUpRDO> => {
  try {
    const response: AxiosResponse<SignUpRDO> = await api.post(route, arg)
    return response.data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<Error> = error

      if (axiosError?.response?.status === 409) {
        const errorMessage = axiosError.response?.data?.message
        throw new Error(errorMessage)
      } else {
        throw error
      }
    } else {
      throw error
    }
  }
}

export const signIn = async (route: string, { arg }: { arg: SignInDTO }): Promise<SignInRDO> => {
  try {
    const response: AxiosResponse<SignInRDO> = await api.post(route, arg)
    return response.data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<Error> = error

      if (axiosError?.response?.status === 401) {
        const errorMessage = axiosError.response?.data?.message
        throw new Error(errorMessage)
      } else {
        throw error
      }
    } else {
      throw error
    }
  }
}
