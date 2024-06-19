import { FC } from 'react'
import { EyeSvg } from './Eye'
import { UserSvg } from './User'
import { EmailSvg } from './Email'
import { LockSvg } from './Lock'
import { CameraSvg } from './Camera'
import { UploadSvg } from './Upload'
import { PictureSvg } from './Picture'
import { EditSvg } from './Edit'
import { ExitSvg } from './Exit'
import { BinSvg } from './Bin'

interface IProps {
  name: IconName
  fill: string
}

export enum IconName {
  EYE = 'eye',
  USER = 'user',
  EMAIL = 'email',
  LOCK = 'lock',
  CAMERA = 'camera',
  UPLOAD = 'upload',
  PICTURE = 'picture',
  EDIT = 'edit',
  EXIT = 'exit',
  BIN = 'bin',
}

const IconComponents: Record<IconName, FC<{ fill: string }>> = {
  [IconName.EYE]: EyeSvg,
  [IconName.USER]: UserSvg,
  [IconName.EMAIL]: EmailSvg,
  [IconName.LOCK]: LockSvg,
  [IconName.CAMERA]: CameraSvg,
  [IconName.UPLOAD]: UploadSvg,
  [IconName.PICTURE]: PictureSvg,
  [IconName.EDIT]: EditSvg,
  [IconName.EXIT]: ExitSvg,
  [IconName.BIN]: BinSvg,
}

export const Icon: FC<IProps> = ({ name, fill }) => {
  const Component = IconComponents[name]

  return <Component fill={fill} />
}
