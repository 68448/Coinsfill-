import React from 'react';

const Title = ({text, marginB = 'mb-[30px]'}) => {
    return (
        <h1 
        className={`text-coinBlack text-[24px] font-bold leading-normal ${marginB}`}>   
            {text}
        </h1>
    );
};

export default Title;