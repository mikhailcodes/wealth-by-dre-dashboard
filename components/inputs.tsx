import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'



export function InputField(props: any) {
    const { placeholder, type, onChangeText, value, required } = props;
    const [hidePass, setHidePass] = useState(true);
    const EyeCon = (props: any) => {
        if (hidePass === true) {
            return (
                <>
                    <button onClick={() => setHidePass(false)} className="absolute right-4 bottom-4">
                        <EyeIcon className="h-7 w-7 text-indigo-600 " />
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <button onClick={() => setHidePass(true)} className="absolute right-4 bottom-4">
                        <EyeOffIcon className="h-7 w-7 text-indigo-600" />
                    </button>
                </>
            )
        }
    };

    return (
        <>
            <div className='relative'>
                <input
                    placeholder={placeholder}
                    autoComplete={type}
                    value={value}
                    {...(type === 'password' ? { type: hidePass ? 'password' : 'text' } : { type: type })}
                    onChange={onChangeText}
                    required={required}
                    className="appearance-none block w-full px-3 py-2 h-14 border border-gray-500 rounded-md shadow-sm placeholder-gray-600 text-bold text-md placeholder:text-md"
                />

                {type === 'password' ? <EyeCon show={hidePass} /> : null}

            </div>
        </>

    );
}
