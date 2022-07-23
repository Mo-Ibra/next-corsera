import { FcBriefcase, FcButtingIn, FcClock } from "react-icons/fc";
import Image from 'next/image';
import { AiOutlineArrowRight } from "react-icons/ai";
import MainImage from './images/1.jpg';
import InnerImage from './images/2.jpg';

function WhoWeAre() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-10">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                    <div className="relative">
                        <Image src={MainImage} />
                        <div className="absolute top-40 right-0 hidden lg:block">
                            <Image src={InnerImage} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <span className="text-blue-500 font-semibold uppercase text-md">WHO WE ARE</span>
                            <h2 className="text-4xl font-bold text-gray-700">We Offer The Best Carrier</h2>
                        </div>
                        <div>
                            <div className="flex items-center gap-5 my-10">
                                <div>
                                    <FcBriefcase className="text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-bold text-lg">Industry Expert Instructor</h3>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 my-10">
                                <div>
                                    <FcButtingIn className="text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-bold text-lg">Industry Expert Instructor</h3>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 my-10">
                                <div>
                                    <FcClock className="text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-bold text-lg">Industry Expert Instructor</h3>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                </div>
                            </div>
                            <button className="my-5 font-bold bg-blue-500 text-white py-4 px-8 rounded-md flex items-center gap-5">
                                Know About Us!
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre