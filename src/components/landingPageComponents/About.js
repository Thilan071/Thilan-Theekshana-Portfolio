import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic2 from "../../assets/images/graducation-dp.jpeg";

export default function About() {
    // Initialize AOS (Animate On Scroll) library
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <section className="bg-primary_2 w-full h-auto py-10 px-5 2xl:py-20" id="about">
            <div data-aos="fade-up">
                <div className="flex flex-col items-center">
                    {/* Section Header */}
                    <h3 className="text-secondary-200 pb-5 2xl:text-xl">BIOGRAPHY</h3>
                    <h1 className="text-white text-4xl pb-1 font-bold 2xl:text-5xl">Who am I?</h1>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-12 h-28 text-primary_1 rotate-90"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" 
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                <div className="lg:flex justify-evenly items-center">
                    {/* Profile Picture */}
                    <div className="flex items-center justify-center relative lg:justify-start lg:w-max">
                        <img 
                            className="w-52 relative shadow-lg shadow-primary_1 mb-10 sm:w-96 lg:mb-0 2xl:w-w108 screen3xl:w-w120" 
                            src={pic2} 
                            alt="Kavin Sashantha"
                        />
                    </div>

                    <div className="lg:flex lg:flex-col xl:w-w120">
                        <div className="flex flex-col items-center">
                            {/* About Me Section */}
                            <h3 className="text-primary_1 flex justify-center pb-5 text-lg lg:text-xl w-full lg:pl-4 xl:pl-0 lg:justify-start 2xl:text-2xl screen3xl:text-3xl">About Me</h3>
                            <p className="text-secondary-200 pb-5 text-sm sm:text-base lg:text-lg xl:text-xl xl:w-auto 2xl:text-2xl screen3xl:text-3xl leading-5 text-center lg:max-w-96 xl:max-w-max lg:text-left 2xl:pb-7">
                            Hi, I’m Thilan Theekshana, a Software Engineering graduate with Lower Second Honours from the University of Westminster. I specialize in full-stack development, with expertise in Java, Spring Boot, React, and Firebase. I’m passionate about creating efficient, scalable solutions and intuitive user experiences. A motivated learner and collaborative team player, I thrive in dynamic environments, driving innovation and solving complex problems with creativity and precision.                            </p>
                        </div>

                        {/* Personal Details Section */}
                        <div className="sm:grid sm:grid-cols-2">
                            <div className="about-details-box">
                                <h4 className="about-details-box-title">Name</h4>
                                <p className="about-details-box-detail screen3xl:w-w120">Thilan Theekshana </p>
                            </div>

                            <div className="about-details-box">
                                <h4 className="about-details-box-title">Email</h4>
                                <p>
                                    <a 
                                        className="about-details-box-detail" 
                                        href="mailto:thilantheekshana221@gmail.com
"
                                    >
                                       thilantheekshana221@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="about-details-box">
                                <h4 className="about-details-box-title">Address</h4>
                                <p className="about-details-box-detail">Sri Lanka</p>
                            </div>

                            <div className="about-details-box">
                                <h4 className="about-details-box-title">Phone</h4>
                                <p>
                                    <a 
                                        className="about-details-box-detail" 
                                        href="tel:+94714872517"
                                    >
                                        +94 78 3861 093
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
