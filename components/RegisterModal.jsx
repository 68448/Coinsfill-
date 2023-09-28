'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal'
import Button from '@/UI/Button';

import register from '@/requests/register';

const styles = {
    modalStyle: 'absolute translate-x-0 translate-y-[-50%] left-0 top-[50%] mx-[28px] bg-gradient-to-b from-[#4936D4] from-0 to-[#6835D4] to-100 px-[28px] pt-[60px] pb-[40px] rounded-[35px] h-[90%]',       
    modalCloseButton: 'absolute w-[38px] h-[38px] top-[-10px] right-[-10px] bg-[#FFC543] rounded-full flex justify-center items-center',
    label: 'flex flex-col gap-[10px]',
    labelSpan: 'text-[14px] text-white font-bold',
    h2Style: 'text-[26px] text-white font-bold leading-normal text-center mb-[50px]',
    inputStyle: 'rounded-[22px] px-[20px] py-[13px] '
}

const RegisterModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [form, setForm] = useState({
        mail: '',
        pass: '',
        pass2: '',
        checked: false
    })

    const closeModal = () => setModalIsOpen(false)

    const openModal = () => setModalIsOpen(true)

    const sendLogin = async (e) => {
        e.preventDefault();
        if( form.mail &&
            form.pass &&
            form.checked &&
            form.pass2){
            
            if(form.pass === form.pass2){
                const data = {email: form.mail, password: form.pass}
                const response = await register(data)
                if(response.ok) alert('Вы успешно зарегистрировались')
                if(!response.ok) alert ('Ошибка при регистрации')
            }
        }else{
            alert('Заполните все поля')
        }
    }


    return (
        <>
            <Button type='button' title="Registration" buttonStyle="blue" onClick={openModal}/>
            {modalIsOpen 
            && 
            <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal} 
            className={styles.modalStyle}
            parentSelector={() => document.querySelector('#modalParent')}
            >
                <div className='scroll-component'>
                    <button 
                    onClick={closeModal}
                    className={styles.modalCloseButton}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M8.60216 7.483L14.8197 1.28213C14.9425 1.13904 15.0067 0.954975 14.9994 0.766723C14.9921 0.57847 14.9139 0.399895 14.7803 0.266681C14.6468 0.133468 14.4677 0.0554274 14.2789 0.048156C14.0902 0.0408846 13.9056 0.104918 13.7622 0.227459L7.54466 6.42833L1.32716 0.219979C1.18593 0.0791288 0.994384 0 0.794658 0C0.594931 0 0.403385 0.0791288 0.262158 0.219979C0.12093 0.360829 0.0415888 0.551863 0.0415888 0.751055C0.0415888 0.950247 0.12093 1.14128 0.262158 1.28213L6.48716 7.483L0.262158 13.6839C0.183646 13.7509 0.119881 13.8334 0.0748636 13.9262C0.0298461 14.019 0.00454851 14.1201 0.000558893 14.2231C-0.00343073 14.3261 0.0139734 14.4289 0.0516793 14.5249C0.0893852 14.6208 0.146579 14.708 0.21967 14.7809C0.292761 14.8538 0.380171 14.9109 0.476415 14.9485C0.572659 14.9861 0.675658 15.0034 0.778948 14.9994C0.882237 14.9955 0.983586 14.9702 1.07664 14.9253C1.16968 14.8804 1.25242 14.8168 1.31966 14.7385L7.54466 8.53767L13.7622 14.7385C13.9056 14.8611 14.0902 14.9251 14.2789 14.9178C14.4677 14.9106 14.6468 14.8325 14.7803 14.6993C14.9139 14.5661 14.9921 14.3875 14.9994 14.1993C15.0067 14.011 14.9425 13.827 14.8197 13.6839L8.60216 7.483Z" fill="#1E1E2E"/>
                        </svg>
                    </button>
                    <h2 className={styles.h2Style}>Регистрация</h2>
                    <form className='loginForm flex flex-col gap-[22px]' onSubmit={(e) => sendLogin(e)}>  
                        <label htmlFor="number" className={styles.label}>
                            <span className={styles.labelSpan}>Ваш email</span>
                            <input 
                            name='mail'
                            value={form.mail}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            type="text" 
                            id='number' 
                            className={styles.inputStyle}
                            />
                        </label>
                        <label htmlFor="pass" className={styles.label}>
                            <span className={styles.labelSpan}>Пароль</span>
                            <input 
                            name='pass'
                            value={form.pass}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            type="password" 
                            id='pass' 
                            className={styles.inputStyle}
                            />
                        </label>  
                        <label htmlFor="pass2" className={styles.label}>
                            <span className={styles.labelSpan}>Подтвердите пароль</span>
                            <input 
                            name='pass2'
                            value={form.pass2}
                            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                            type="password" 
                            id='pass2' 
                            className={styles.inputStyle}
                            />
                        </label>
                        <Link 
                        href='/forgot' 
                        className='text-[#86BFEB] text-[12px] font-medium underline'
                        >Забыли пароль?</Link>           
                        <label 
                        htmlFor='policy' 
                        className='flex gap-[18px] items-start'  
                        >
                            <input 
                            type="checkbox"
                            name='checked'
                            checked={form.checked}
                            onChange={(e) => setForm({...form, [e.target.name]: !form.checked})}
                            /> 
                            <span className='text-white text-[12px] font-medium
                            '>Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с Условиями Соглашения! Правилами и политикой конфиденциальности компании</span>   
                        </label>  
                        <Button type='submit' title="Регистрация" buttonStyle="orange"/>
                    </form>
                </div>
            </Modal>           
            }


        </>
    );
};

export default RegisterModal;