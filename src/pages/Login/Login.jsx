import { LockIcon, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { auth, googleProvider } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth"
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [checKAuth , setCheckAuth] = useState("")
    const [checkLogin , setCheckLogin] = useState(false)
    const [errors ,setErrors] = useState({}) 


    
    
    const validate = () => {
        let tempErrors = {}
        if(!email.trim()) {
            tempErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)){
            tempErrors.email = "Email is invalid";
        }   
        if(!password) tempErrors.password = "Password is required"
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
        }

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log("Logged in as:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error logging in:", errorCode, errorMessage);
                if (errorCode === "auth/user-not-found") {
                    setCheckAuth("This email address is not registered.");
                    setCheckLogin(true)
                  } else if (errorCode === "auth/wrong-password") {
                    setCheckAuth("Incorrect password. Please try again.");
                    setCheckLogin(true)
                  } else {
                    setCheckAuth("Login failed. Please check your details and try again.");
                    setCheckLogin(true)
                  }
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validate()) {
            handleLogin(email , password)
            !checkLogin ? navigate('/home') : navigate("/")
        } else {
            alert(checKAuth)
        }
        

    };

    // const singInWithGoogle = async () => {
    //     try {
    //         await signInWithPopup(auth, googleProvider)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const handleLogOut = async () => {
    //     try {
    //         await signOut(auth)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    return (
        <div className='w-full flex flex-row sm:fixed sm:overflow-y-hidden bg-blue-50'>
            {/* Image Login */}
            <div className='lg:flex justify-center hidden items-center bg-primary rounded-r-[60px] w-1/2 h-screen'>
                <div className='h-24 bg-white py-12 px-8 2xl:py-24 2xl:px-16 rounded-br-[25px] rounded-tr-[25px]  rounded-tl-[25px] 2xl:rounded-br-[50px] 2xl:rounded-tr-[50px]  2xl:rounded-tl-[50px]  '>
                    <div className='flex justify-center items-center h-1/2'>
                        <div className='bg-primary p-6 2xl:p-12 rounded-br-[12px] rounded-tr-[12px] rounded-tl-[12px] 2xl:rounded-br-[25px] 2xl:rounded-tr-[25px] 2xl:rounded-tl-[25px] '>
                        </div>
                    </div>
                </div>
                {/* <div className='flex px-4  text-white'>
                    <h1 className='text-[65px] 2xl:text-[135px] pb-4'>Do Chat</h1>
                </div> */}
                {/* <img className='rounded-[60px]' src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Login Illustration" /> */}
            </div>
            {/* Login Form */}
            <div className=" lg:w-1/2  h-screen  w-full flex items-center justify-center p-4">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                        <div className="rounded-md  space-y-4">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                    <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                                    {errors.password && <p className='text-red-600 text-xs pt-1'>{errors.password}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 accent-primary"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-primary transition duration-200 ease-int text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-0 hover:text-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Login in
                            </button>
                        </div>
                    </form>

                    <div className='mt-6'>
                        <div className='flex justify-center items-center'>
                            <p className='text-sm text-gray-500'>Don't have an account? </p>
                            <NavLink to='/register' className='text-sm text-primary font-semibold ml-2'>Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
