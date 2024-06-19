import axios, { AxiosError, AxiosResponse } from 'axios'

import { api } from './axios-instance'
import { ImageRDO } from '@/shared/types'

export const uploadImage = async (route: string, { arg }: { arg: any }) => {
  try {
    const response: AxiosResponse<ImageRDO> = await api.post(route, arg, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
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
