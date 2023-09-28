'use client'
import React, { useState } from 'react';

const Button = ({title, type, buttonStyle, onClick, style, textColor = 'white'}) => {

    return (
        <button
        type={type}
        onClick={onClick}
        className={
            buttonStyle === 'orange' ? 
            `rounded-[50px] bg-gradient-to-r from-[#FF8412] from-[4.95%] to-[#FFC543] to-[93.62%] px-[98px] pt-[16px] pb-[18px] text-center text-[14px] font-bold leading-normal text-${textColor} mb-[20px] ` + style :
            buttonStyle === 'blue' ? 
            `rounded-[50px] bg-gradient-to-r from-[#4834D4] from-[4.95%] to-[#686DE0] to-[93.62%] px-[98px] pt-[16px] pb-[18px] text-center text-[14px] font-bold leading-normal text-${textColor} mb-[20px] ` + style :
            buttonStyle === 'gray' ?
            `rounded-[50px] bg-gradient-to-r from-[#EDEBFB] from-[4.95%] to-[#F0F0FC] to-[93.62%] px-[98px] pt-[16px] pb-[18px] text-center text-[14px] font-bold leading-normal text-${textColor} mb-[20px] shadow-shadowGray` + style :
            '' + style 
        }
      >
        {title}
      </button>
    );
};

export default Button;