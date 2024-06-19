import * as yup from 'yup'

const editFormSchema = yup.object().shape({
  name: yup.string(),
  slug: yup.string(),
  description: yup.string(),
})

export default editFormSchema
