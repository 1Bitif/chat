import React from 'react'

export const Loging = () => {
    return (
        <>
            <div className='w-full flex flex-row bg-background'>
                {/* Image Login */}
                <div className='flex justify-center items-center bg-primary rounded-r-[60px] w-1/2 h-screen'>
                    <img className='rounded-[60px]' src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
                </div>
                {/* login */}
                <div className='w-1/2 bg-background h-screen'>
                    <div className='flex flex-col mt-16 justify-center items-center'>
                        <div className='flex justify-center items-center w-full '>
                            <h1 className='text-3xl font-bold ' >Login</h1>
                        </div>
                        <div className=''> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
