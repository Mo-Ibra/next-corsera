import Image from 'next/image';

import Link from 'next/link';

import NotfoundImage from '/assets/images/404.png';

function Notfound() {
    return (
        <section className='relative'>
            <div className="container mx-auto px-10">
                <div className='mx-auto text-center'>
                    <Image src='/assets/images/404.png' alt="Notfound" width={788} height={607} />
                </div>
                <div className='text-center'>
                    <h3 className='my-5 text-gray-700 font-bold text-4xl'>Oops... Page Not Found!</h3>
                    <p className='text-gray-500'>Please return to the site's homepage, It looks like nothing was found at this location</p>
                    <button className='bg-blue-500 text-white py-2 px-8 my-5 rounded-sm'>
                        <Link
                            href='/'
                        >
                            Back to home
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Notfound