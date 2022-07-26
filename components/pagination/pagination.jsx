import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Pagination() {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-10">
                <div className='mx-auto text-center'>
                    <button className='mx-2 bg-slate-50 text-blue-500 font-semibold px-3 py-2 rounded-sm'><AiOutlineLeft /></button>
                    <button className='mx-2 bg-slate-50 text-blue-500 font-semibold px-3 py-2 rounded-sm'>1</button>
                    <button className='mx-2 bg-slate-50 text-blue-500 font-semibold px-3 py-2 rounded-sm'>2</button>
                    <button className='mx-2 bg-blue-500 text-white font-semibold px-3 py-2 rounded-sm'>3</button>
                    <button className='mx-2 bg-slate-50 text-blue-500 font-semibold px-3 py-2 rounded-sm'>...</button>
                    <button className='mx-2 bg-slate-50 text-blue-500 font-semibold px-3 py-2 rounded-sm'>8</button>
                    <button className='mx-2 bg-slate-50 text-blue-500 font-semibold px-3 py-2 rounded-sm'><AiOutlineRight /></button>
                </div>
            </div>
        </section>
    )
}

export default Pagination