import React from 'react';

function Login() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className='bg-white shadow-lg border border-slate-200 w-6/12 mx-auto p-5'>
                    <h2 className='text-gray-700 font-bold my-5 text-3xl'>Login</h2>
                    <form>
                        <input type="text" placeholder='Email' className='block my-2 p-4 border border-slate-100 w-full outline-none text-gray-500' />
                        <input type="text" placeholder='Password' className='block my-2 p-4 border border-slate-100 w-full outline-none text-gray-500' />
                        <button className='bg-blue-500 text-white w-full p-2 rounded-md my-5'>Login</button>
                        <p className='my-5 text-gray-500 cursor-pointer'>Lost Your password</p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login