import React, { useEffect } from 'react';
import ProPic from "../../assets/images/profile-pic.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <div>
            <div className="bg-primary_2 p-3 font-comfortaa sm:p-6 lg:p-0 pb-8" data-aos="fade-up">
                <div className="sm:flex pb-10 lg:grid lg:grid-cols-3">
                    <div className="pr-5 sm:min-w-72 lg:p-6 lg:py-24 2xl:py-44 2xl:pl-16 screen3xl:py-60 screen3xl:pl-24">
                        <h1 className="text-white text-3xl pb-2 font-fra sm:text-3xl sm:pb-6 lg:text-6xl xl:text-7xl xl:pb-14 2xl:text-8xl screen3xl:text-9xl screen3xl:pb-20">Hello<span
                            className="text-primary_1 font-sans">...</span></h1>
                        <h2 className="text-primary_1 font-medium text-lg sm:text-xl sm:pb-6 lg:text-2xl xl:text-4xl xl:pb-14 2xl:text-text4_5xl screen3xl:text-5xl screen3xl:pb-20">─ I'am Thilan Theekshana</h2>

                        <div className="text-primary_1 hidden sm:flex items-center xl:pb-10 screen3xl:pb-20">
                            <h2 className="pr-2 sm:text-xl lg:text-4xl  2xl:text-text4_5xl screen3xl:text-5xl">Let's Talk </h2>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5"
                                stroke="currentColor" 
                                className="w-5 h-5 sm:w-8 sm:h-8 xl:w-12 xl:h-12 screen3xl:w-14 screen3xl:h-14"
                            >
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" 
                                />
                            </svg>
                        </div>

                        <div className="hidden w-full flex items-center h-24 lg:flex">
                            <button
                                className="flex border text-secondary-100 text-lg border-primary_1 font-bold bg-primary_1 rounded-md h-14 w-52 items-center justify-center cursor-pointer hover:text-primary_1 hover:bg-primary_2 transition ease-in duration-300 xl:h-20 w-64 screen3xl:h-28 screen3xl:w-96">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5"
                                    stroke="currentColor" 
                                    className="w-5 h-5 xl:w-8 xl:h-8 screen3xl:w-12 screen3xl:h-12"
                                >
                                    <path 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
                                    />
                                </svg>

                                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                <a 
                                    className="pl-2 xl:text-2xl screen3xl:text-4xl" 
                                    href={`${process.env.PUBLIC_URL}/Thilan_Theekshana_CV.pdf`} 
                                    download="Thilan_Theekshana_CV.pdf"
                                >
                                    Download CV
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="justify-center hidden md:hidden lg:flex relative lg:max-h-96">
                        <div className="bg-primary_1 sm:w-56 sm:h-60 xl:w-64 xl:h-72 2xl:w-72 2xl:h-96 screen3xl:w-96 screen3xl:h-height108">
                            <img 
                                className="absolute left-1/2 transform -translate-x-1/2" 
                                src={ProPic} 
                                alt="profile-pic" 
                            />
                        </div>
                    </div>

                    <div className="lg:py-24 pr-3 2xl:py-44 2xl:pr-16 screen3xl:py-60">
                        <div>
                            <h3 className="text-white pb-3 sm:text-2xl sm:pb-5 lg:text-3xl xl:text-5xl xl:leading-leading15 screen3xl:text-6xl screen3xl:leading-leading20 screen3xl:pb-14">Professional full stack Developer</h3>
                            <p className="text-secondary-200 pb-5 text-xs max-w-96 sm:text-base sm:max-w-max lg:text-lg xl:text-2xl screen3xl:text-3xl leading-5">As a
                            I am a professional Software Engineer specializing in full-stack development, with a strong focus on building intuitive and user-friendly digital solutions. My expertise lies in seamlessly combining back-end efficiency with front-end aesthetics to deliver robust, scalable, and visually compelling applications that enhance user experiences and drive engagement.                                </p>
                        </div>
                        <div className="text-primary_1 flex sm:hidden items-center">
                            <h2 className="pr-2 sm:text-2xl">Let's Talk </h2>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke-width="1.5"
                                stroke="currentColor" 
                                className="w-5 h-5 sm:w-8 sm:h-8 lg:w-12 lg:h-12">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" 
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-center flex sm:flex md:flex lg:hidden">
                    <div className="bg-primary_1 w-80 rounded-t-full">
                        <img 
                            className="w-80" 
                            src={ProPic} 
                            alt="profile-pic" 
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center items-center h-16 lg:hidden">
                    <button
                        className="flex mt-8 border text-secondary-100 border-primary_1 font-bold bg-primary_1 rounded-md h-10 w-40 items-center justify-center cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5"
                            stroke="currentColor" 
                            className="w-5 h-5"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
                            />
                        </svg>

                        <a 
                            className="pl-2" 
                            href={`${process.env.PUBLIC_URL}/Thilan_Theekshana_CV.pdf`} 
                            download="Thilan_Theekshana_CV.pdf"
                        >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
