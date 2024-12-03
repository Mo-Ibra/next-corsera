import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import { AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

    const navbarTogglerRef = useRef(null);

    const toggleBtnHandler = () => {
        navbarTogglerRef.current.classList.toggle('active');
    }

    const closeBtnHandler = () => {
        navbarTogglerRef.current.classList.remove('active');
    }

    useEffect(() => {

        /* Add icon on .nav-item if dropdown exists */

        const navItems = document.querySelectorAll(".nav-item");

        navItems.forEach((item) => {
            const hasDropdowns = item.querySelector(".dropdown") !== null;
            if (hasDropdowns) {
                item.classList.add("icon");
            }
        });

        /* add Sticky Class to navbar when Scroll down */
        window.onscroll = function () {
            let navbar = document.querySelector('.navbar');
            if (navbar) {
                if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
                    navbar.classList.add('sticky');
                } else {
                    navbar.classList.remove('sticky');
                }
            }
        }
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <h4 style={{ fontWeight: 'bold', cursor: 'pointer' }}>Your Logo</h4>
                </div>
                <button className="navbar-toggler" onClick={toggleBtnHandler} >
                    <AiOutlineMenu aria-hidden="true" />
                </button>
                <ul className="navbar-nav" ref={navbarTogglerRef}>
                    <li className="nav-close">
                        <button className="btn-nav-close" onClick={closeBtnHandler}>
                            <span className="close-btn">+</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link href='/'>
                                    <a className='nav-link'>Home Demo 1</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/home-2'>
                                    <a className='nav-link'>Home Demo 2</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/home-3'>
                                    <a className='nav-link'>Home Demo 3</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/about-1" className="nav-link">About</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link href="/about-1">
                                    <a className='nav-link'>About 1</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='about-2'>
                                    <a className='nav-link'>About 2</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/course-1" className="nav-link">Courses</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link href="/course-1">
                                    <a className='nav-link'>Course 1</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='course-2'>
                                    <a className='nav-link'>Course 2</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/course-3">
                                    <a className='nav-link'>Course 3</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='course-with-sidebar'>
                                    <a className='nav-link'>Course With Sidebar</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='course-details'>
                                    <a className='nav-link'>Course Details</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/price" className="nav-link">Pages</a>
                        <ul className="dropdown">
                            <li className="nav-item">
                                <Link href="/price">
                                    <a className='nav-link'>Pricing</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/team'>
                                    <a className='nav-link'>Team</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='#'>
                                    <a className="nav-link">Auth </a>
                                </Link>
                                <ul className="dropdown">
                                    <li className="nav-item">
                                        <Link href='/auth/login'>
                                            <a className='nav-link'>Login</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='/auth/register'>
                                            <a className='nav-link'>Register</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href='/privacy-police'>
                                    <a className='nav-link'>Privacy & Police</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/testimonials'>
                                    <a className='nav-link'>Testimonials</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/404'>
                                    <a className='nav-link'>404 Error</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className='nav-link'>Contact</a>
                        </Link>
                    </li>
                </ul>
                <div className="navbar-utils">
                    <Link href='/auth/login'>
                        <a style={{ textDecoration: 'none' }}>
                            <button className='bg-blue-500 text-white px-4 py-1 rounded-sm'>Login</button>
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
