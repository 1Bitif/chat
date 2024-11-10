import { LockIcon, MailIcon, UserRoundPen } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import { Avatar } from '@material-tailwind/react'

export const Register = () => {

    const [avatarSrc , setAvatarSrc] = useState("https://avatar.iran.liara.run/public/15");
    const fileInputRef = useRef(null)


    const handleClickAvatar = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("ma");
    return (
        <>
            <div className='w-full flex flex-row bg-blue-50'>
                {/* Image Login */}
                <div className='lg:flex justify-center hidden items-center bg-primary rounded-r-[60px] w-1/2 h-screen'>
                    <div className='h-24 bg-white py-12 px-8 2xl:py-24 2xl:px-16 rounded-br-[25px] rounded-tr-[25px]  rounded-tl-[25px] 2xl:rounded-br-[50px] 2xl:rounded-tr-[50px]  2xl:rounded-tl-[50px]  '>
                        <div className='flex justify-center items-center h-1/2'>
                            <div className='bg-primary p-6 2xl:p-12 rounded-br-[12px] rounded-tr-[12px] rounded-tl-[12px] 2xl:rounded-br-[25px] 2xl:rounded-tr-[25px] 2xl:rounded-tl-[25px] '>
                            </div>
                        </div>
                    </div>
                    <div className='flex px-4  text-white'>
                        <h1 className='text-[65px] 2xl:text-[135px] pb-4'>Do Chat</h1>
                    </div>
                    {/* <img className='rounded-[60px]' src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Login Illustration" /> */}
                </div>
                {/* Login Form */}
                <div className="min-h-screen lg:w-1/2  w-full flex items-center justify-center p-4">
                    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                        <div className="flex relative justify-center ">
                        <UserRoundPen className='absolute top-1/2 transform -translate-y-1/2  text-primary '  />
                        <Avatar 
                            src={avatarSrc} 
                            onClick={handleClickAvatar}
                            className='cursor-pointer hover:opacity-40' 
                            alt="avatar" 
                            size="xxl" />
                        <input 
                            ref={fileInputRef}
                            type="file"
                            style={{ display: "none" }}
                            accept='image/*'
                            onChange={handleImageChange}
                        />
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={"handleSubmit"} >
                            <div className="rounded-md shadow-sm space-y-4">
                                <div className='flex flex-row space-x-2'>
                                    <div>
                                        <label htmlFor="fisrtName" className="sr-only">
                                            First Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="fisrtName"
                                                name="fisrtName"
                                                type="text"
                                                // autoComplete="email"
                                                // onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                                placeholder="First Name"
                                            />
                                            {/* <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="sr-only">
                                            Last Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="TEXT"
                                                // autoComplete="email"
                                                // onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                                placeholder="Last Name"
                                            />
                                            {/* <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            // autoComplete="email"
                                            // onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                        <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            // onChange={(e) => setPassword(e.target.value)}
                                            // autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                        <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            // onChange={(e) => setPassword(e.target.value)}
                                            // autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Confirm password"
                                        />
                                        <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            country={country.toLowerCase()}
                                            value={phone}
                                            onChange={setPhone}
                                            inputProps={{
                                                name: "phone",
                                                required: true,
                                                autoFocus: false,
                                            }}
                                            inputClass=" placeholder:text-blue-gray-300 focus:!border-primary !w-full" // Adjust input styles
                                        />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-primary transition duration-200 ease-int text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-0 hover:text-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                >
                                    Sing in
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    onClick={"singInWithGoogle"}
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Google</span>
                                    <FcGoogle className="w-5 h-5" />
                                </button>
                                <button
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Sign in with Facebook</span>
                                    <FaFacebook className='w-5 h-5 text-blue-600' />
                                </button>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='flex justify-center items-center'>
                                <p className='text-sm text-gray-500'>Already have an account? </p>
                                <NavLink to='/login' className='text-sm text-primary font-semibold ml-2'>Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
