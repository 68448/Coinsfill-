'use client'

import Button from '@/UI/Button';
import Title from '@/UI/Title';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const Page = () => {
    const [acess, setAcess] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const userData = localStorage.getItem('userData')
        const userJSON = JSON.parse(userData)
        if(userJSON.token){
            setAcess(true)
        }else{ router.push('/')}
    }, [])

    const uploadImage = () => {
        router.push('/account/image')
    }

    return (
        <>
        {acess && 
            <div className='container px-[28px]'>
                <Title text='Настройки аккаунта' marginB='mb-[37px]'/>
               <Button title='Загрузка изображения' type='click' buttonStyle='orange' onClick={uploadImage} />
            </div>
        }
        </>
    );
};

export default Page;