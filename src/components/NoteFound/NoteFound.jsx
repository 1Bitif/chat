import React from 'react';


export const NoteFound = () => {
    return (
        <div className='h-screen w-full flex justify-center '>
            <div className='flex justify-center bg-primary py-4 items-center w-full'>
                <div className='bg-white m-2 rounded-full '>
                    <div className=' relative flex justify-center items-center'>
                        <img
                            className='rounded-full  '
                            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
                        <div className='absolute top-2'>
                            <h1 className='text-8xl font-bold font-mono  '>404</h1> 
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};
