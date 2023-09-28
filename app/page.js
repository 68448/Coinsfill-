import Title from '@/UI/Title'
import LoginModal from '@/components/LoginModal'
import RegisterModal from '@/components/RegisterModal'

export default function Home() {
  return (
    <div className="flex flex-col px-[28px]" >
      <Title text='Выберите действие' marginB='mb-[84px]'/>
      <LoginModal />
      <RegisterModal />
    </div>
  )
}
