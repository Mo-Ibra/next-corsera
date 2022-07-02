import React from 'react';
import Card from './card/card';

import { FcInfo, FcHeadset, FcGoogle, FcGlobe } from 'react-icons/fc';

function ContactUs() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='grid grid-cols-2 gap-10'>
                        <Card
                            icon={<FcInfo className='mx-auto text-3xl' />}
                            title='Our Website'
                            infoOne='www.example.com'
                            infoTwo='www.theme.com'
                        />
                        <Card
                            icon={<FcHeadset className='mx-auto text-3xl' />}
                            title='Call Us On'
                            infoOne='+2763 (388) 2930'
                            infoTwo='+2763 (388) 2930'
                        />
                        <Card
                            icon={<FcGoogle className='mx-auto text-3xl' />}
                            title='Email Us'
                            infoOne='eduvibe@example.com'
                            infoTwo='contact@eduvibe.com'
                        />
                        <Card
                            icon={<FcGlobe className='mx-auto text-3xl' />}
                            title='Our Location'
                            infoOne='486 Normana Avenue'
                            infoTwo='Morningtide, 4223'
                        />
                    </div>
                    <div>
                        <input type="text" placeholder='Name' className='block mb-4 w-full border border-slate-300 rounded-md outline-none text-sm p-5 text-gray-500' />
                        <input type="text" placeholder='Email' className='block mb-4 w-full border border-slate-300 rounded-md outline-none text-sm p-5 text-gray-500' />
                        <input type="text" placeholder='Phone' className='block mb-4 w-full border border-slate-300 rounded-md outline-none text-sm p-5 text-gray-500' />
                        <input type="text" placeholder='Subject' className='block mb-4 w-full border border-slate-300 rounded-md outline-none text-sm p-5 text-gray-500' />
                        <input type="text" placeholder='Message' className='block mb-4 w-full border border-slate-300 rounded-md outline-none text-sm p-5 text-gray-500' />
                        <button className='block border px-8 py-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-300 rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>
            {/* <ShapesOne /> */}
        </section>
    )
}

export default ContactUs