import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { InputField } from '../components/inputs'
import { PrimaryButton } from '../components/buttons'

import { useResetPassword } from '@nhost/react'

const inputs = [{ placeholder: 'Email', type: 'email' }]

const Reset: NextPage = () => {

    const [responseMessage, setResponseMessage] = React.useState({ message: '', type: '' });
    const [formFields, setFormFields] = React.useState({ email: '' });
    const { resetPassword, isLoading } = useResetPassword()

    const isAnEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleMessage = (a: string, b: string) => {
        setResponseMessage({ message: a, type: b })
        setTimeout(() => {
            setResponseMessage({ message: '', type: '' })
        }, 2500);
    };

    const handleChange = (name: any, value: string) => {
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault()
        const x = isAnEmail(formFields.email)
        x === false ? handleMessage('Please enter a valid email address', 'error') : await resetPassword(formFields.email).then((e) => {
            if (e.error) {
                handleMessage(e.error.message, 'error')
            }
        })
    }

    return (
        <>
            <div className="h-full overflow-scroll flex flex-col py-12 sm:px-6 lg:px-8">
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-lg ">

                    <div className="bg-white py-10 px-16 rounded-lg shadow relative">

                        <h1 className='text-3xl font-semibold text-center mb-0 mt-3'>
                            Reset Password
                        </h1>
                        <a href="/login" className='mt-3 mb-6 block text-sm underline text-center'>back to login</a>

                        <form className="space-y-5 flex flex-col">
                            {inputs.map((input, index, type) => (
                                <InputField
                                    key={index}
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    onChangeText={(e: any) => handleChange(input.type, e.target.value)}
                                    required={true}
                                />
                            ))}

                            <PrimaryButton
                                text='Reset Password'
                                click={handleFormSubmit}
                                isLoading={isLoading}
                            ></PrimaryButton>

                        </form>

                        <p className='flex justify-center text-sm mt-3 '>Need help?
                            <a href='' className='pl-1 underline text-indigo-700 font-bold'> Contact support.</a>
                        </p>


                        {responseMessage.type === 'error' ? <p className='text-center text-red-500 mt-3'>{responseMessage.message}</p> : <p className='text-center text-indigo-500 mt-3'>{responseMessage.message}</p>}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Reset
