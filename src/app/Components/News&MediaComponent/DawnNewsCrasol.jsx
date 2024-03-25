'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Doctor from '../homeComponents/Doctor';
import news1 from "../../../Images/Group 327.png";
import news2 from "../../../Images/Group 327 (1).png";
import news3 from "../../../Images/Group 327 (2).png";
import DawnNews from './DawnNews';

export default function DawnNewsCrasol(){
  const doctors = [
    { img: news1, heading: 'Dawn News', date: 'Jan 11..24' },
    { img: news2, heading: 'Dawn News', date: 'Jan 11..24' },
    { img: news3, heading: 'Dawn News', date: 'Jan 11..24' },
    { img: news1, heading: 'Dawn News', date: 'Jan 11..24' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current active slide index

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: (current, next) => setCurrentSlide(next) // Update currentSlide state before slide change
  };
  return(
    <>
     <Slider {...settings}>
        {doctors.map((doctor, index) => (
            <DawnNews
            key={index}
            img={doctor.img}
            heading={doctor.heading}
            date={doctor.date}
            bg={doctor.country === 'pakistan' ? '#1F8B7B' : '#E9501D'} 
            name={index === currentSlide ? doctor.name : ''} // Show name only if it's the current slide
            speciality={index === currentSlide ? doctor.speciality : ''} // Show speciality only if it's the current slide
            />
            ))}
       </Slider>
            </>
  )
}