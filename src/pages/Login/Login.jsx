import { LockIcon, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { auth, googleProvider } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth"
import { TitleIcon } from '../../icons/Icons';
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
        <div className='w-full flex flex-row sm:fixed sm:overflow-y-hidden bg-gray-100'>
            {/* Image Login */}
            <div className='lg:flex justify-center hidden items-center bg-primary rounded-r-[60px] w-1/2 h-screen'>
                <TitleIcon height={"300" } width={"500"} color={"#ffffff"} />
            </div>
            {/* Login Form */}
            <div className=" lg:w-1/2  h-screen  w-full flex items-center justify-center p-4">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                    <div className="gap-4 flex flex-col justify-center items-center w-full ">
                        <TitleIcon   />
                        <div className='gap-2 flex flex-col justify-start w-full'>
                        <h2 className="text-3xl  font-extrabold text-gray-900">Welcome</h2>
                        <p className="text-sm text-gray-600">Please sign in to your account</p>
                        </div>
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
