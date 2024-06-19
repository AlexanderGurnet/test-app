import axios, { AxiosError, AxiosResponse } from 'axios'

import { api } from './axios-instance'
import { IUser } from '@/shared/types'

export const getProfile = async (route: string, { arg }: { arg: string | null }) => {
  try {
    const response: AxiosResponse<IUser> = await api.get(route, { headers: { 'X-API-KEY': arg } })
    return response.data
  } catch (error) {
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

export const getUsers = async (route: string) => {
  try {
    const response: AxiosResponse<IUser[]> = await api.get(route)
    return response.data
  } catch (error) {
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

export const getUser = async (route: string) => {
  try {
    const response: AxiosResponse<IUser> = await api.get(route)
    return response.data
  } catch (error) {
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

export const patchUser = async (route: string, { key, body }: { key: string; body: any }) => {
  try {
    const response: AxiosResponse<IUser> = await api.patch(route, body, { headers: { 'X-API-KEY': key } })
    return response.data
  } catch (error) {
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
