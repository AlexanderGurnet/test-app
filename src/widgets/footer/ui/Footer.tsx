'use client'

import { usePathname, useRouter } from 'next/navigation'

import { loginRoute, signUpRoute } from '@/shared/router'

export const Footer = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  const isRegisterRoute = pathname === `/${signUpRoute}`
  const isDisplayed = pathname === `/${loginRoute}` || pathname === `/${signUpRoute}`
  const routeToNavigate = isRegisterRoute ? `/${loginRoute}` : `/${signUpRoute}`

  return isDisplayed ? (
    <footer className="fixed bottom-0 w-full flex justify-center items-center border-t border-stroke-secondary bg-white h-[4.5rem]">
      <div className="flex justify-center items-center px-4 max-w-[350px]">
        <h4 className="font-normal text-base text-gray">
          {isRegisterRoute ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
        </h4>
        <a onClick={() => handleNavigation(routeToNavigate)} className="cursor-pointer text-black font-medium ml-1.5">
          {isRegisterRoute ? 'Войти' : 'Зарегистрироваться'}
        </a>
      </div>
    </footer>
  ) : null
}
