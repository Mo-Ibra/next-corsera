import Image from 'next/image';

import NotfoundImage from '../../assets/images/404.png';

function Notfound() {
    return (
        <section className='py-20 background-image relative'>
            <div className="container mx-auto px-10">
                <div className='mx-auto text-center'>
                    <Image src={NotfoundImage} alt="Notfound" />
                </div>
                <div className='text-center'>
                    <h3 className='my-5 text-gray-700 font-bold text-4xl'>Oops... Page Not Found!</h3>
                    <p className='text-gray-500'>Please return to the site's homepage, It looks like nothing was found at this location</p>
                    <button className='bg-blue-500 text-white py-2 px-8 my-5 rounded-sm'>Back to home</button>
                </div>
            </div>
        </section>
    )
}

export default Notfound