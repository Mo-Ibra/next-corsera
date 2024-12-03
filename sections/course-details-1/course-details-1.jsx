import Image from "next/image";

import { AiOutlineCompass, AiFillStar, AiOutlineUsergroupAdd, AiOutlineBook, AiOutlineDeploymentUnit, AiOutlineFieldBinary } from "react-icons/ai";

const CourseDetails1 = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-10">
                <Image src='/assets/images/course-details/1.jpg' width={1300} height={700} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between my-5">
                            <div className="flex items-center gap-2">
                                <Image src='/assets/images/avatars/1.jpg' width={32} height={32} className="rounded-full" />
                                <h3 className="text-gray-900 font-bold cursor-pointer hover:text-blue-500 duration-300">By Leone Xaviona</h3>
                            </div>
                            <div>
                                <AiFillStar className="text-yellow-500 inline-block" />
                                <AiFillStar className="text-yellow-500 inline-block" />
                                <AiFillStar className="text-yellow-500 inline-block" />
                                <AiFillStar className="text-yellow-500 inline-block" />
                                <AiFillStar className="text-yellow-500 inline-block" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 w-3/4">Grow Personal Financial Security Thinking & Principles</h2>
                            
                            <hr className="my-5" />

                            <h4 className="text-gray-800 font-bold my-5 text-2xl">Course Description</h4>
                            
                            <p className="text-gray-500 text-lg my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p className="text-gray-500 text-lg my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            
                            <hr className="my-5" />

                            <h4 className="text-gray-800 font-bold my-5 text-2xl">What You’ll Learn From This Course</h4>

                            <ul className="pl-8 list-disc">
                                <li className="text-gray-500 text-sm font-semibold my-5">
                                    Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
                                </li>
                                <li className="text-gray-500 text-sm font-semibold my-5">
                                    Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer
                                </li>
                                <li className="text-gray-500 text-sm font-semibold my-5">
                                    Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
                                </li>
                                <li className="text-gray-500 text-sm font-semibold my-5">
                                    Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                                </li>
                            </ul>

                            <hr className="my-5" />

                            <h4 className="text-gray-800 font-bold my-5 text-2xl">Certification</h4>
                            <p className="text-gray-500 text-lg my5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="py-4 bg-white shadow-lg text-center">
                            <Image src='/assets/images/course-details/2.jpg' width={370} height={270} />
                            <div className="flex items-center justify-between px-6 my-5">
                                <div className="flex items-center gap-2">
                                    <AiOutlineCompass className="text-gray-600" />
                                    <p className="text-gray-600 font-semibold">Start Date</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-semibold">6 Hrs 40 Min</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 my-5">
                                <div className="flex items-center gap-2">
                                    <AiOutlineUsergroupAdd className="text-gray-600" />
                                    <p className="text-gray-600 font-semibold">Enrolled</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-semibold">69</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 my-5">
                                <div className="flex items-center gap-2">
                                    <AiOutlineBook className="text-gray-600" />
                                    <p className="text-gray-600 font-semibold">Lectures</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-semibold">16</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 my-5">
                                <div className="flex items-center gap-2">
                                    <AiOutlineDeploymentUnit className="text-gray-600" />
                                    <p className="text-gray-600 font-semibold"> Skill Level</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-semibold">Intermediate</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 my-5">
                                <div className="flex items-center gap-2">
                                    <AiOutlineFieldBinary className="text-gray-600" />
                                    <p className="text-gray-600 font-semibold">Language</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-semibold">English</p>
                                </div>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-4">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetails1;