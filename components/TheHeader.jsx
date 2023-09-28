import Link from 'next/link';
import React from 'react';
import Image from "next/image";

import logo from '../app/images/logo.png'
import searchbutton from '../app/images/searchButton.png'
import profileAvatar from '../app/images/profileAvatar.png'

const TheHeader = () => {
    return (
        <header className='flex items-center justify-between pt-[12px] mb-[33px] px-[28px]'>
            <Link href={'/'} className='flex items-end'>
                <Image src={logo} alt='app logo'/>
                <h1 className='text-coinBlue text-[12px] font-bold leading-normal'> СoinsFill</h1>
            </Link>
            <div className='flex items-center gap-[16px]'>
                <button className='searchButton'><Image src={searchbutton} alt='search button'/></button>
                <Link className='profile' href='/account'><Image src={profileAvatar} alt='profile avatar'/></Link>
            </div>
        </header>
    );
};

export default TheHeader;