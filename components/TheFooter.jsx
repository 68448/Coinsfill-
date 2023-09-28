import Link from 'next/link';
import React from 'react';
import Image from "next/image";

import homeButton from '../app/images/home.svg'
import cardButtom from '../app/images/card.svg'
import nextButtom from '../app/images/next.svg'
import cartButtom from '../app/images/cart.svg'

const TheFooter = () => {
    return (
        <footer className='flex justify-between items-center pt-[20px] pb-[12px] px-[28px] bg-gradient-to-b from-[#fff] from-[4.95%] to-[#E5F1FB] to-[93.62%] mt-auto'>
            <Link href={'./auth'} className='flex flex-col gap-[10px] items-center'>
                <Image src={homeButton} alt='menu 1'/>
                <p className='text-[12px] text-coinFooter font-medium leading-normal'>ראשי</p>
            </Link>
            <Link href={'./auth'} className='flex flex-col gap-[10px] items-center'>
                <Image src={cardButtom} alt='menu 2'/>
                <p className=''>מפות</p>
            </Link>
            <Link href={'./auth'} className='flex flex-col gap-[10px] items-center'>
                <Image src={nextButtom} alt='menu 3' />
                <p className=''>תרגומים</p>
            </Link>
            <Link href={'./auth'} className='flex flex-col gap-[10px] items-center'>
                <Image src={cartButtom} alt='menu 4'/>
                <p className=''>גיוס כספים</p>
            </Link>           
        </footer>
    );
};

export default TheFooter;