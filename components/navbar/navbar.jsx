import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';

function Navbar() {
    return (
        <nav className="p-4 bg-white shadow-lg">
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center gap-8">
                    <div>
                        <h1>Logo</h1>
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex items-center gap-8">
                            <li className='cursor-pointer'>HOME</li>
                            <li className='cursor-pointer flex items-center gap-2'>

                                <p>PAGES</p>
                                <AiFillCaretDown className='text-xs text-gray-500' />

                                {/* Dropdown */}
                                <div className="drop-down hidden">
                                    
                                </div>
                            </li>
                            <li className='cursor-pointer'>ABOUT</li>
                            <li className='cursor-pointer'>CONTACT</li>
                        </ul>
                    </div>
                    <div className="md:hidden block">
                        <AiOutlineMenu className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;