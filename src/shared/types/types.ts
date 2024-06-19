export type SignUpDTO = {
  email: string
  name: string
  password: string
}

export type SignInDTO = {
  email: string
  password: string
}

export type SignUpRDO = {
  value: string
}

export type SignInRDO = SignUpRDO

export type ImageRDO = {
  id: string
  url: string
  width: string
  height: string
}
