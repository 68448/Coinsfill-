import BreadCrumbs from '@/UI/BreadCrumbs'
import Link from 'next/link'

import '../globals.css'

export const metadata = {
  title: 'Профиль',
  description: 'Профиль',
}

export default function AccountLayout({ children }) {
  return (
    <>
        <div className='px-[28px]'>    
            <BreadCrumbs>
                <Link href='/' className='text-[10px] text-[#1E2E2E] hover:underline'>Главная / </Link>
                <Link href='/account' className='text-[10px] text-[#1E2E2E] hover:underline'>Настройка аккаунта / </Link>
                <Link href='/account/image' className='text-[10px] text-[#1E2E2E] hover:underline'>Загрука аватара</Link>
            </BreadCrumbs>
        </div>    
        {children}   
    </>

    
  )
}
