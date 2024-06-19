import Link from 'next/link'

import { profilesRoute } from '@/shared/router'
import { Button } from '@/shared/ui'
import { Heading } from '@/shared/ui/components/Heading'

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[calc(100vh-80px)]">
      <Heading level={1} text="Похоже, такой страницы не существует" classnames="max-w-full text-center" />
      <Link href={`/${profilesRoute}`}>
        <Button content="Вернуться к пользователям" />
      </Link>
    </div>
  )
}
