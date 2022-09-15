import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { InputField } from '../components/inputs'
import { useSignInEmailPassword } from '@nhost/nextjs'
import { PrimaryButton } from '../components/buttons'
const inputs = [
    {
        placeholder: 'Email',
        type: 'email',
    },
    {
        placeholder: 'Password',
        type: 'password',

    }
]


const Login: NextPage = () => {
    const { signInEmailPassword, isLoading } = useSignInEmailPassword()
    const [responseMessage, setResponseMessage] = React.useState('');
    const [formFields, setFormFields] = React.useState({ email: '', password: '' });
    const router = useRouter()

    const isAnEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleChange = (name: string, value: string) => {
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };



    const handleFormSubmit = async (e: any) => {
        e.preventDefault()
        const x = isAnEmail(formFields.email)
        x === false ? setResponseMessage('Please enter a valid email address') : await signInEmailPassword(formFields.email, formFields.password).then((e) => {
            if (e.error) {
                setResponseMessage(e.error.message)
                return
            }

            router.push('/')
        })
    }

    return (
        <>
            <div className="h-full overflow-scroll flex flex-col py-12 sm:px-6 lg:px-8">
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-lg">
                    <div className="bg-white py-10 px-16 rounded-lg shadow">
                        <h1 className='text-3xl font-semibold text-center mb-6'>
                            Login to
                            <p>{' '}</p>
                            Wealth By Dre
                        </h1>

                        <form className="space-y-5 flex flex-col">
                            {inputs.map((input, index) => (
                                <InputField
                                    key={index}
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    onChangeText={(e: any) => handleChange(input.type, e.target.value)}
                                    required={true}
                                />
                            ))}

                            <a href="/reset_password" className='mt-3 mb-6 block text-sm underline'>Forgot password?</a>

                            <PrimaryButton
                                text='Login'
                                click={handleFormSubmit}
                                isLoading={isLoading}
                            ></PrimaryButton>

                        </form>


                        <p className='flex justify-center mt-3 text-sm '>Don't  have an account?
                            <a href='' className='pl-1 underline text-indigo-700 font-bold'> Request access.</a>
                        </p>

                        {responseMessage !== '' ? <p className='text-red-500 text-center mt-3'>{responseMessage}</p> : null}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
