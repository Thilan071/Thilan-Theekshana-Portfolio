import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nuwanthika from "../../assets/images/nuwanthika.jpeg";
import thilini from "../../assets/images/thilini.jpg";
import gayan from "../../assets/images/gayan.jpg";
import darshana from "../../assets/images/darshana.jpg";
import adl from "../../assets/images/ADL.jpeg";

// Testimonials data
const testimonials = [
    {
        id: 1,
        image: nuwanthika,
        text: 'A friendly and humble Software Engineer with a passion for developing innovative solutions, committed to continuous learning, teamwork, and delivering high-quality results.',
        author: 'Nuwanthika - Software Engineer (Axiata Digital Labs - ADL)',
    },
    {
        id: 2,
        image: thilini,
        text: 'Thilan\'s remarkable skills and positive attitude contributed greatly to the team\'s success. His dedication to delivering high-quality work and his commitment to excellence were truly inspiring and made a lasting impact.',
        author: 'Thilini - senior software quality assurance engineer (Axiata Digital Labs)',
    },
    {
        id: 4,
        image: darshana,
        text: 'Collaborating with Thilan has been an absolute pleasure; his dedication to excellence and strong team spirit truly shine through. Keep up the great work, Thilan!',
        author: 'Darshana - Senior Software Engineer (Axiata Digital Labs)',
    },
    {
        id: 3,
        image: gayan,
        text: 'Thilan’s exceptional technical skills and proactive approach played a pivotal role in the success of our project. His ability to collaborate effectively with the team, coupled with his problem-solving mindset, made the entire process smooth and efficient. His contributions not only met but often exceeded expectations, making him an invaluable asset to the team. Working with Thilan was a truly rewarding experience.',
        author: 'Gayan - Senior Software Engineer (Axiata Digital Labs)',
    },
    {
        id: 5,
        image: adl,
        text: 'We would like to express our sincere gratitude for choosing Intervest on this journey. We trust it has been enriching, we wish you continued success and fulfillment. Best wishes for your next chapter. We hope to welcome you back at Intervest in the future.',
        author: 'Axiata Digital Labs',
    },
];

const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: null,
    };

    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <section aria-labelledby="testimonials">
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <article 
                        key={testimonial.id} 
                        className="feedback-slider bg-primary_2 p-6 flex flex-col justify-center items-center lg:flex-row lg:py-14" 
                    >
                        <div 
                            className='flex flex-col justify-center items-center lg:flex-row'
                            data-aos="fade-up"
                            >
                            
                            {/* Testimonial Image */}
                            <div className="flex justify-center items-center">
                                <img 
                                    className="p-5 max-w-80 sm:max-w-96 lg:max-w-w108 2xl:max-w-w120 screen3xl:max-w-w135" 
                                    src={testimonial.image} 
                                    alt={`Testimonial from ${testimonial.author}`} 
                                />
                            </div>
                            
                            {/* Testimonial Content */}
                            <div className="bg-secondary-100 p-2 rounded-md text-xs sm:text-sm md:max-w-w135 md:text-base lg:text-xl lg:max-w-w108 lg:py-10 lg:px-5 xl:text-2xl xl:py-20 2xl:max-w-w120 2xl:py-30 2xl:leading-10 screen3xl:max-w-w135 screen3xl:text-3xl screen3xl:py-32 screen3xl:leading-leading15">
                                <div>
                                    <svg 
                                        className="rotate-180 flex justify-start" 
                                        width="15" 
                                        height="30" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <text 
                                            x="0" 
                                            y="24" 
                                            fontSize="35" 
                                            fill="#D9C5A6"
                                        >,,
                                        </text>
                                    </svg>
                                </div>
                                <div className="text-white leading-8 2xl:leading-10 screen3xl:leading-leading15">
                                    {testimonial.text}
                                </div>
                                <div className="flex justify-end">
                                    <svg 
                                        width="15" 
                                        height="30" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <text 
                                            x="0" 
                                            y="24" 
                                            fontSize="35" 
                                            fill="#D9C5A6"
                                        >,,
                                        </text>
                                    </svg>
                                </div>
                                <div className="text-gray-400 pt-2">
                                    {testimonial.author}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </Slider>
        </section>
    );
};

export default TestimonialCarousel;
