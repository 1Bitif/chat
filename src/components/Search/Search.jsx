import { SearchIcon, X } from 'lucide-react'
import React, { useState } from 'react'

export const Search = () => {
    const [search, setSearch] = useState('');
    const ClearSearch = () => {
        setSearch('');
    }
    return (
        <div className='w-full relative '>
            <input 
                onChange={(e) => setSearch(e.target.value)} 
                value={search} type="text" placeholder='Search' 
                className='w-full px-10 bg-gray-50 border-b  border-gray-300 text-gray-900 text-sm  focus:outline-none focus:border-primary block p-2.5' 
            />

            <div className='absolute top-2 left-2 text-gray-400'>
                <SearchIcon />
            </div>
            { search && <div className='absolute top-2 right-2 text-gray-600 hover:text-primary cursor-pointer '>
                <X size={20} className='' onClick={ClearSearch} />
            </div>}
        </div>
    )
}
