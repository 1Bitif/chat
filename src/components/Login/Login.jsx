import { FacebookIcon, GithubIcon, LockIcon, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempted with:', email, password);
    };

    return (
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
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" onClick={handleSubmit} method="POST">
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                    <LockIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-primary transition duration-200 ease-int text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-0 hover:text-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Sign in
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
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Sign in with GitHub</span>
                                <GithubIcon className="w-5 h-5" />
                            </button>
                            <button
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Sign in with Facebook</span>
                                <FacebookIcon className="w-5 h-5 " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
