import React from 'react'

function Searchbar() {
    return (
        <section className='pt-20'>
            <div className='container mx-auto px-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-semibold'>Showing 1-16 Of 42 Results</p>
                    </div>
                    <div>
                        <input placeholder='Search Courses..' className='hidden sm:block px-8 py-2 outline-none border border-slate-200 text-slate-700 rounded-sm' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Searchbar;