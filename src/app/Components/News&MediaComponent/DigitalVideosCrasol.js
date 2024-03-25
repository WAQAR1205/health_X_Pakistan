'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pngg from "../../../Images/DigitalNews1.png"
import DigitalVideosImage from './DigitalVideoImage'


export default function DigitalVideoCrasol() {
    const doctors = [
        { img: pngg, heading: 'Tired of Unnecessary High Costs?', time: '2 month ago' },
        { img: pngg, heading: 'Tired of Unnecessary High Costs?', time: '2 month ago' },
        { img: pngg, heading: 'Tired of Unnecessary High Costs?', time: '2 month ago' },
        { img: pngg, heading: 'Tired of Unnecessary High Costs?', time: '2 month ago' },
        { img: pngg, heading: 'Tired of Unnecessary High Costs?', time: '2 month ago' },

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
                    slidesToShow: 4,
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
    return (
        <Slider {...settings}>
            {doctors.map((doctor, index) => (
                <DigitalVideosImage
                    key={index}
                    img={doctor.img}
                    heading={doctor.heading}
                    time={doctor.time}
                    bg={doctor.country === 'pakistan' ? '#1F8B7B' : '#E9501D'}
                    name={index === currentSlide ? doctor.name : ''} // Show name only if it's the current slide
                    speciality={index === currentSlide ? doctor.speciality : ''} // Show speciality only if it's the current slide
                />
            ))}
        </Slider>
    )
}