import Image from 'next/image';
import React from 'react';
import styles from '../../styles/work-shop.module.css';
import MainImage from './images/1.jpg';

function Workshop() {
    return (
        <section className={`${styles.workshop} py-40`}>
            <div className='container mx-auto px-10'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <span className='text-white font-semibold my-5'>FREE WORKSHOP</span>
                        <h2 className='text-4xl my-5 text-white font-bold'>Join Our Free Workshops</h2>
                        <p className='text-white my-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sit amet, consect adipi scing elit, sed do eiusmod tempor incididunt ut sed do
                            eiusmod tempor incididunt ut labore et dolore aliqua.
                        </p>
                        <button className='text-blue-500 font-bold rounded-sm py-4 px-8 bg-white'>More upcoming workshop!</button>
                    </div>
                    <div>
                        <Image src={MainImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workshop