import TheHeader from '@/components/TheHeader'
import './globals.css'

import TheFooter from '@/components/TheFooter'

export const metadata = {
  title: 'Страница входа',
  description: 'Логин и регистрация в приложении',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-200">
      <body
        className="max-w-[430px] min-h-[640px] mx-auto my-36 bg-white flex flex-col relative"
        id="modalParent"
      >
        <TheHeader />
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  )
}
