'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import UploadImage from '@/components/UploadImage';

const Page = () => {

    const [access, setAccess] = useState('')

    const router = useRouter()

    useEffect(() => {
        const userData = localStorage.getItem('userData')
        const userJSON = JSON.parse(userData)
        if(userJSON.token){
            setAccess(true)
        }else{ router.push('/')}
    }, [])


    return (
        <>        
        {access && 
                <div className='container px-[28px] relative'>               
                <UploadImage round={true} sizeLimit='5242880'/>
            </div>        
       }
        </>

    );
};

export default Page;