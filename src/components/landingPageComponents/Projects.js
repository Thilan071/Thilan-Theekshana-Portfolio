import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllProjectLists from "./AllProjectLists";
import AgroConnect from "../../assets/images/AgroConnect for Farmers.png";
import Farmer from "../../assets/images/Farmer.jpg";
import publicTranport from "../../assets/images/Public Transport Tracker.png";
import poorTransport from "../../assets/images/poor transport.jpg";
import penaltyLogin from "../../assets/images/penalty login.jpg";
import penaltyPersonDetails from "../../assets/images/penalty person details.jpg";
import penalty1 from "../../assets/images/penalty 1.png";
import penalty2 from "../../assets/images/penalty 2.png";
import heritage2 from "../../assets/images/heritage2.jpg";
import heritage1 from "../../assets/images/heritage1.png";

import portfolio01 from "../../assets/images/portfolio01.png";
import portfolio02 from "../../assets/images/portfolio02.png";

import cleo1 from "../../assets/images/cleo1.png";
import cleo2 from "../../assets/images/cleo2.png";
import appit1 from "../../assets/images/appit1.png";
import appit2 from "../../assets/images/appit2.png";
import elcado1 from "../../assets/images/elcado1.png";
import elcado2 from "../../assets/images/elcado2.png";
import greenLink1 from "../../assets/images/green link 1.png";
import greenLink2 from "../../assets/images/green link 2.png";
import troubleticket from "../../assets/images/Trouble Ticket Management System.jpg";
import createTroubleTicket from "../../assets/images/Create Trouble Ticket Interface.jpg";

export default function Projects() {
  // State for active tab (UI/UX or Front End Development)
  const [activeTab, setActiveTab] = useState('uiux');

  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section className="bg-secondary-100 w-full h-auto py-10 px-5 2xl:py-20" id="portfolio">
      <div className="flex flex-col items-center" data-aos="fade-up">
        {/* Section Header */}
        <header className="text-center">
          <h3 className="text-secondary-200 pb-5 2xl:text-xl">PORTFOLIO</h3>
          <h1 className="text-white text-4xl pb-1 font-bold 2xl:text-5xl">My Projects</h1>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-12 text-primary_1 rotate-90"
          >
            <path 
              fillRule="evenodd" 
              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" 
              clipRule="evenodd" 
            />
          </svg>
        </header>

        {/* Tab Buttons */}
        <div className="border-2 border-primary_1 rounded-full text-primary_1 py-1 px-1 flex items-center">
          <button 
            className={`font-bold text-xs px-2 border-primary_1 rounded-full p-2 focus:ease-in duration-300 md:text-xl md:py-3 ${activeTab === 'uiux' ? 'bg-primary_1 text-primary_2' : 'bg-transparent text-primary_1'}`}
            onClick={() => setActiveTab('uiux')}
          >
            UI/UX Design & Flutter Development
          </button>
          <button 
            className={`font-bold text-xs px-2 border-primary_1 rounded-full p-2 focus:ease-in duration-300 md:text-xl md:py-3 ${activeTab === 'frontend' ? 'bg-primary_1 text-primary_2' : 'bg-transparent text-primary_1'}`}
            onClick={() => setActiveTab('frontend')}
          >
            Front End Development
          </button>
        </div>

        {/* UI/UX Design Projects */}
        {activeTab === 'uiux' && (
          <div className="text-white mt-5">
            <AllProjectLists
              img1={AgroConnect}
              img2={Farmer}
              titleName="Flutter Mobile App - The AgroConnect app bridges the gap between farmers and buyers while providing essential tools for farming success."
              workName="AgroConnect for Farmers"
              paragraph="AgroConnect is an app designed for farmers, offering easy access to weather updates, crop price trends, farming tips, and an e-learning platform. It features a user-friendly interface with offline access, multi-language support, and a marketplace for direct farmer-to-buyer transactions. The app helps farmers improve productivity, stay informed, and connect with experts and buyers."
              galleryId="gallery1"
            />
            <AllProjectLists
              img1={publicTranport}
              img2={poorTransport}
              titleName="Flutter Mobile App - Public Transport Tracker app can significantly improve daily commuting and address the challenges of unreliable schedules and overcrowding "
              workName="Public Transport Tracker"
              paragraph="Designed a user-friendly interface for a Public Transport Tracker app, focusing on intuitive navigation and visually appealing elements to enhance the commuting experience. The UI streamlines real-time tracking, route planning, and schedule access, ensuring users can efficiently manage their journeys with minimal effort while providing a seamless and engaging interaction at every stage."
              galleryId="gallery2"
            />
            <AllProjectLists
              img1={penaltyLogin}
              img2={penaltyPersonDetails}
              titleName="UI/UX Design with React Native"
              workName="Online Penalty Payment App"
              paragraph="The app was created to solve the problem of how to deal with car fines. Currently, paying fines is timeconsuming and might be confusing. Individuals sometimes have questions about their fines, including what they must pay, how to pay them, and the status of their payment. "
              galleryId="gallery3"
            />
            <AllProjectLists
              img1={penalty1}
              img2={penalty2}
              titleName="UI/UX Design with WordPress"
              workName="Online Penalty Payment Site"
              paragraph="The eventual goal of the project is to bridge the gap between car owners and authorities, introducing a digital solution that speeds up fine payments, reduces administrative costs associated with non-compliance as well elicits improved compliance behavior on traffic laws. "
              galleryId="gallery4"
            />
            <AllProjectLists
              img1={heritage1}
              img2={heritage2}
              titleName="Flutter Mobile App"
              workName="Heritage Tourism App"
              paragraph="The Heritage Tourism Guide app aims to enhance the travel experience by bringing attention to lesser-known cultural and historical sites, ensuring tourists discover hidden gems that are often overshadowed by mainstream attractions. The app will serve as a comprehensive platform for travelers seeking a deeper understanding of a region's culture, history, and traditions."
              galleryId="gallery5"
            />
          </div>
        )}

        {/* Front End Development Projects */}
        {activeTab === 'frontend' && (
          <div className="text-white mt-5">
            <AllProjectLists
              img1={troubleticket}
              img2={createTroubleTicket}
              titleName="Front End Development"
              workName="During Internship"
              paragraph="During my internship, I worked as a front-end developer, where I was responsible for creating graphical user interfaces (GUIs) using React and Bootstrap. The project I contributed to was the R&D team CRM front-end development, where I specifically focused on designing and implementing various tables for the CRM interface. "
              galleryId="gallery16"
            />
            <AllProjectLists
              img1={greenLink1}
              img2={greenLink2}
              titleName="Front End Development"
              workName="wordPress"
              paragraph="I've completed building a powerful desktop-focused technology using wordpress and plugins, specifically optimized for desktop applications."
              galleryId="gallery15"
            />
            <AllProjectLists
              img1={elcado1}
              img2={elcado2}
              titleName="Front End Development"
              workName="Elcardo Website Using WordPress"
              paragraph="Developed the Elcardo website using WordPress, focusing on creating a professional and user-friendly platform to showcase the brand's products and services effectively."
              galleryId="gallery14"
            />
            <AllProjectLists
              img1={cleo1}
              img2={cleo2}
              titleName="Front End Development"
              workName="Cleo Collection contact page using WordPress"
              paragraph="Designed and implemented the Cleo Collection contact page using WordPress, ensuring a clean and user-friendly interface for seamless customer inquiries and communication."
              galleryId="gallery12"
            />
            <AllProjectLists
              img1={appit1}
              img2={appit2}
              titleName="Front End Development"
              workName=" APIIT website using WordPress"
              paragraph="Built the APIIT website using WordPress, creating a professional and intuitive platform to showcase academic programs, institutional information, and student resources effectively."
              galleryId="gallery13"
            />
            <AllProjectLists
              img1={portfolio01}
              img2={portfolio02}
              titleName="Front End Development"
              workName="My Portfolio"
              paragraph="I created a sample restaurant webpage using React JS and Tailwind CSS, demonstrating my ability to integrate dynamic user interfaces with responsive, utility-first design. This project not only honed my skills in React and Tailwind but also underscored my commitment to building seamless, visually appealing web experiences. It serves as a prime example of my proficiency in modern web development technologies."
              galleryId="gallery6"
            />
            {/* <AllProjectLists
              img1={resturant1}
              img2={resturant2}
              titleName="Front End Development"
              workName="Resturant Website Sample"
              paragraph="I developed a restaurant webpage with Tailwind CSS, using zero custom CSS, showcasing efficient, utility-first design. This project highlights my skill in creating responsive, modern web layouts efficiently."
              galleryId="gallery7"
            />
            <AllProjectLists
              img1={businessCard1}
              img2={businessCard2}
              titleName="Front End Development"
              workName="Business Card Sample"
              paragraph="I crafted a React JS-based sample business card page, enhancing my skills in interactive design and component structuring. This project reflects my proficiency in turning business ideas into functional and attractive web solutions."
              galleryId="gallery8"
            />
            <AllProjectLists
              img1={airbnb1}
              img2={airbnb2}
              titleName="Front End Development"
              workName="Airbnb Sample"
              paragraph="I developed a React JS-based sample Airbnb page, showcasing responsive design and user interaction. This project enhanced my React skills and understanding of user-centric web development."
              galleryId="gallery9"
            />
            <AllProjectLists
              img1={shoe1}
              img2={shoe2}
              titleName="Front End Development"
              workName="Shoe Shop"
              paragraph="I crafted a responsive e-commerce shoe shop using HTML and CSS, honing my front-end skills and prioritizing user experience."
              galleryId="gallery10"
            />
            <AllProjectLists
              img1={tours1}
              img2={tours2}
              titleName="Front End Development"
              workName="Travel page"
              paragraph="Developing a travel website, I emphasized intuitive design and responsiveness with HTML and CSS, refining my front-end abilities and user-centric approach."
              galleryId="gallery11"
            /> */}
          </div>
        )}
      </div>
    </section>
  );
}
