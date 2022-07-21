import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from '../../styles/bread-crumb.module.css';

function BreadCrumb({ title }) {
    return (
        <section className={`py-20 ${styles.breadcrumb}`}>
            <div className="container mx-auto px-10">
                <h2 className='text-5xl mb-4 font-bold text-gray-800'>{title}</h2>
                <div className='flex gap-2 items-center text-gray-700'>
                    <span>Home</span>
                    <AiOutlineArrowRight />
                    <span className='font-semibold text-blue-500 cursor-pointer'>{title}</span>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb