import { LockIcon, MailIcon, UserRoundPen } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { NavLink, useNavigate } from 'react-router-dom'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Avatar } from '@material-tailwind/react'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from '../../config/firebase'
import imageLogo1 from "../../../public/asset/images/DoChat2.png"
import imageiconLogo1 from "../../../public/asset/images/Vector1.png"
import imageLogo2 from "../../../public/asset/images/DoChat.png"
import imageiconLogo2 from "../../../public/asset/images/Vector.png"
import { TitleIcon } from '../../icons/Icons'
export const Register = () => {
    const navigate = useNavigate();
    const [avatarSrc, setAvatarSrc] = useState("https://avatar.iran.liara.run/public/15");
    const fileInputRef = useRef(null)

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        // phone: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {}
        if (!form.firstName) tempErrors.firstName = "First name is required"
        if (!form.lastName) tempErrors.lastName = "Last name is required"
        if (!form.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!form.password) tempErrors.password = "Password is required"
        if (!form.confirmPassword) tempErrors.confirmPassword = "Confirm password is required"
        // if (!form.phone) tempErrors.phone = "Phone is required"

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await createUserWithEmailAndPassword(auth, form.email, form.password)
                navigate("/home")
            } catch (err) {
                console.error("sing with email and password is not working", err)
            }
            console.log("register", form)
        }
    }

    const SingWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate("/home")
        } catch (err) {
            console.error("sing with google not working ", err)
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleClickAvatar = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
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
            <div className='w-full flex bg-gray-100'>
                {/* Image Login */}
                <div className=' w-0 lg:w-1/2 '>
                    <div className='lg:flex w-1/2 justify-center hidden items-center gap-4 bg-primary  rounded-r-[60px]  fixed h-screen '>
                        <TitleIcon height={"300" } width={"500"} color={"#ffffff"} />
                    </div>
                </div>
                {/* Login Form */}
                <div className="min-h-screen lg:w-1/2  w-full flex items-center justify-center p-4">
                    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                        <div className=' flex gap-4 justify-center'>

                            <TitleIcon />
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                            <div className="rounded-md space-y-4">
                                <div className='flex flex-row space-x-2'>
                                    <div>
                                        <label htmlFor="firstName" className="sr-only">
                                            First Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                onChange={handleChange}
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                                placeholder="First Name"
                                            />

                                        </div>
                                            {errors.firstName && <p className='text-red-600 text-xs pt-1'>{errors.firstName}</p>}
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
                                                onChange={handleChange}

                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                            {errors.lastName && <p className='text-red-600 text-xs pt-1'>{errors.lastName}</p>}
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
                                            onChange={handleChange}

                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                        <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                        {errors.email && <p className='text-red-600 text-xs pt-1'>{errors.email}</p>}
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
                                            onChange={handleChange}

                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                        <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                        {errors.password && <p className='text-red-600 text-xs pt-1'>{errors.password}</p>}
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
                                            onChange={handleChange}

                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Confirm password"
                                        />
                                        <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                        {errors.confirmPassword && <p className='text-red-600 text-xs pt-1'>{errors.confirmPassword}</p>}
                                </div>
                                {/* <div>
                                        <PhoneInput
                                            onchange={handleChange}
                                            placeholder="Enter phone number"
                                            country={country.toLowerCase()}
                                            value={phone}
                                            // onChange={setPhone}
                                            inputProps={{
                                                name: "phone",
                                                required: true,
                                                autoFocus: false,
                                            }}
                                            inputClass=" placeholder:text-blue-gray-300 focus:!border-primary !w-full" // Adjust input styles
                                        />
                                         {errors.phone && <p className='text-red-600 text-xs pt-1'>{errors.phone}</p>}
                                </div> */}
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
                                    onClick={SingWithGoogle}
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
