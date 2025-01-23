import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from './Lightbox';
import AgroConnect  from "../assets/images/AgroConnect for Farmers.png";
import agroDescription from "../assets/images/agro description.png";
import publicTranport from "../assets/images/Public Transport Tracker.png";
import publicTransportDescription from "../assets/images/public Transport Description.png";
import penaltyLogin from "../assets/images/penalty login.jpg";
import penaltyCreate from "../assets/images/penalty create.jpg";
import penaltyDetails from "../assets/images/penalty details.jpg";
import penaltyRequest from "../assets/images/penalty request.jpg";
import penaltyTime from "../assets/images/penalty time.jpg";
import penaltyPersonDetails from "../assets/images/penalty person details.jpg";
import penalty1 from "../assets/images/penalty 1.png";
import penalty2 from "../assets/images/penalty 2.png";
import penalty3 from "../assets/images/penalty 3.png";
import penalty4 from "../assets/images/penalty 4.png";


import heritage1 from "../assets/images/heritage1.png";
import heritage3 from "../assets/images/heritage3.png";

import businesscardImplemented from "../assets/images/businesscardDesign.png";
import cleo1 from "../assets/images/cleo1.png";
import cleo2 from "../assets/images/cleo2.png";
import cleo3 from "../assets/images/cleo3.png";
import cleo4 from "../assets/images/cleo4.png";
import cleo5 from "../assets/images/cleo5.png";
import cleo6 from "../assets/images/cleo6.png";

import appit1 from "../assets/images/appit1.png";
import appit2 from "../assets/images/appit2.png";
import appit3 from "../assets/images/appit3.png";
import appit4 from "../assets/images/appit4.png";
import appit5 from "../assets/images/appit5.png";

import elcado1 from "../assets/images/elcado1.png";
import elcado2 from "../assets/images/elcado2.png";
import elcado3 from "../assets/images/elcado3.png";
import elcado4 from "../assets/images/elcado4.png";

import greenLink1 from "../assets/images/green link 1.png";
import greenLink2 from "../assets/images/green link 2.png";
import greenLink3 from "../assets/images/green link 3.png";
import greenLink4 from "../assets/images/green link 4.png";
import troubleticket from "../assets/images/Trouble Ticket Management System.jpg";
import createTroubleTicket from "../assets/images/Create Trouble Ticket Interface.jpg";
import editTroubleTicket from "../assets/images/Edit Trouble Ticket Interface.jpg";
import viewTroubleTicket from "../assets/images/Detailed Ticket View.jpg";

import portfolio01 from "../assets/images/portfolio01.png";
import portfolio02 from "../assets/images/portfolio02.png";
import portfolio03 from "../assets/images/portfolio03.png";
import portfolio04 from "../assets/images/portfolio04.png";





// Define the image sets for different galleries
const imageSets = {
  gallery1: {
    images: [
      AgroConnect,
      agroDescription,
      
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery2: {
    images: [
      publicTranport,
      publicTransportDescription,
     
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery3: {
    images: [
      penaltyLogin,
      penaltyCreate,
      penaltyDetails,
      penaltyPersonDetails,
      penaltyTime,
      penaltyRequest
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery4: {
    images: [
      penalty1,
      penalty2,
      penalty3,
      penalty4,
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery5: {
    images: [
      heritage1,
      heritage3,
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery6: {
    images: [
      portfolio01,
      portfolio02,
      portfolio03,
      portfolio04,
    ],
    text: "",
    links: [
      { 
        url: "https://ThilanTheekshana.com/", 
        label: "Thilan Theekshana" 
      },
    ]
  },
  // gallery7: {
  //   images: [
  //     resturantimg1,
  //     resturantimg2,
  //   ],
  //   text: "",
  //   links: [
  //     { 
  //       url: "", 
  //       label: "" 
  //     },
  //   ]
  // },
  gallery8: {
    images: [
      businesscardImplemented,
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery9: {
    images: [
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery10: {
    images: [],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery11: {
    images: [],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
  gallery12: {
    images: [
      cleo1,
      cleo2,
      cleo3,
      cleo4,
      cleo5,
      cleo6,
    ],
    text: "",
    links: [
      { 
        url: "https://bodimkarayo.lk/", 
        label: "Bodimkarayo" 
      },
    ]
  },
  gallery13: {
    images: [
      appit1,
      appit2,
      appit3,
      appit4,
      appit5,
      
    ],
    text: "",
    links: [
      { 
        url: "http://happysales.lk", 
        label: "Happy Sales" 
      },
    ]
  },
  gallery14: {
    images: [
      elcado1,
      elcado2,
      elcado3,
      elcado4,
    ],
    text: "",
    links: [
      { 
        url: "http://alignmentchecker.thilantheekshana.com/", 
        label: "Alignment Checker" 
      },
    ]
  },
  gallery15: {
    images: [
      greenLink1,
      greenLink2,
      greenLink3,
      greenLink4,
    ],
    text: "",
    links: [
      { 
        url: "http://openframework.thilantheekshana.com/", 
        label: "Next Tailwind Framework" 
      },
    ]
  },
  gallery16: {
    images: [
      createTroubleTicket,
      viewTroubleTicket,
      troubleticket,
      editTroubleTicket,
    
    ],
    text: "",
    links: [
      { 
        url: "", 
        label: "" 
      },
    ]
  },
};

export default function GalleryPage() {
  const { galleryId } = useParams();
  const gallery = imageSets[galleryId] || { images: [], text: '', links: [] };
  const images = gallery.images;
  const galleryText = gallery.text;
  const galleryLinks = gallery.links;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Function to open the lightbox at a specific image index
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto py-10 bg-secondary-100">
      {/* Display gallery text and links if available */}
      {galleryText && (
        <p className="text-center text-white font-bold text-xl pb-10">
          {galleryText}
          {galleryLinks.map((link, index) => (
            <span key={index}>
              {" "}
              <a 
                href={link.url} 
                className="text-blue-500 underline">
                  {link.label}
              </a>
            </span>
          ))}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {/* Render gallery images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt="" // Empty alt for decorative images
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Render Lightbox component if the lightbox is open */}
      {isOpen && (
        <Lightbox
          images={images}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
