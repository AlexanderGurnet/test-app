import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
})
