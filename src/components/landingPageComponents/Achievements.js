import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Achievements() {
  
    // Initialize AOS (Animate on Scroll) library
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);
    
    return (
        <section className="bg-primary_1 py-5 xl:py-10">
            <div 
                className="flex justify-evenly py-5 xl:py-10" 
                data-aos="fade-up">
                
                    {/* Achievement 1 */}
                    <div className="achievements-div">
                        <h1 className="achievements-num">10+</h1>
                        <h3 className="achievements-text">Self Projects</h3>
                    </div>
                    
                    {/* Achievement 2 */}
                    <div className="achievements-div">
                        <h1 className="achievements-num">2</h1>
                        <h3 className="achievements-text">Advanced Courses</h3>
                    </div>
                    
                    {/* Achievement 3 */}
                    <div className="achievements-div">
                        <h1 className="achievements-num">11+</h1>
                        <h3 className="achievements-text">Months Experience</h3>
                    </div>
            </div>
        </section>
    );
}
