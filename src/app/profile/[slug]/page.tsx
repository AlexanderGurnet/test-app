import { AccountPage } from '@/views/account-page'
import { getUser } from '@/shared/api'
import { userRoute } from '@/shared/router'
import { notFound } from 'next/navigation'

interface IProps {
  params: { slug: string }
}

export default async function Account({ params }: IProps) {
  try {
    const data = await getUser(`${userRoute}/${params?.slug}`)

    if (!data) {
      notFound()
    }

    return <AccountPage user={data} />
  } catch (error) {
    notFound()
  }
}
