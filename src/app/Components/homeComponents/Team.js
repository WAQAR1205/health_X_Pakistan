// // import { Box } from "@mui/material"
// // import Slider from '../Slider'
// // import lady from '../../../Images/lady.png'
// // import male from '../../../Images/male.png'
// // import canada from '../../../Images/canada.png'
// // import Doctor from './Doctor'

// // export default function Team(){
// //     const doctors = [
// //         { country: 'Pakistan', img: lady, name: 'Dr. Hareem Riaz', speciality: 'General Practitioner' },
// //         { country: 'Canada', img: canada, name: 'Dr. Hareem Riaz', speciality: 'General Practitioner' },
// //         { country: 'Pakistan', img: male, name: 'Dr. Hareem Riaz', speciality: 'General Practitioner' }
// //     ];
// //     return(
// //         <Box sx={{
// //             clear: 'both',
// //             display: 'flex',
// //             justifyContent: 'space-around',
// //             flexDirection: {md: 'row' , xs: 'column'},
// //         }}>
// //             <Slider />
// //             {/* <Doctor /> */}
// //             <Doctor Country='Pakistan' img={lady} Name='Dr. Hareem Riaz' Speciality='General Practitioner' />
// //             <Doctor Country='Canada' img={canada} Name='Dr. Hareem Riaz' Speciality='General Practitioner' />
// //             <Doctor Country='Pakistan' img={male} Name='Dr. Hareem Riaz' Speciality='General Practitioner' />
// //         </Box>

// //     )
// // }


// import { Box } from "@mui/material"
// import Slider from '../Slider'
// import lady from '../../../Images/lady.png'
// import male from '../../../Images/male.png'
// import canada from '../../../Images/canada.png'
// import Doctor from './Doctor'
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// export default function Team() {

//   const doctors = [
//     { country: 'Pakistan', img: lady, name: 'Dr. Hareem Riaz', speciality: 'General Practitioner' },
//     { country: 'Canada', img: canada, name: 'Dr. Hareem Riaz', speciality: 'General Practitioner' },
//     { country: 'Pakistan', img: male, name: 'Dr. Hareem Riaz', speciality: 'General Practitioner' }
//   ];

//   return (
//     <>
//       <Box sx={{
//         clear: 'both',
//         display: 'flex',
//         justifyContent: 'space-around',
//         flexDirection: { md: 'row', xs: 'column' },
//       }}>
//         <Slider />

//         <Swiper
//           slidesPerView={'2'}
//           spaceBetween={0}
//           autoplay={{
            
//              delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >

//           {doctors.map((doctor, index) => (
//             <SwiperSlide key={index}>
//               <Doctor
//                 Country={doctor.country}
//                 img={doctor.img}
//                 Name={doctor.name}
//                 Speciality={doctor.speciality}
//               />
//             </SwiperSlide>
//           ))}

//           {/* <SwiperSlide><Doctor Country='Pakistan' img={lady} Name='Dr. Hareem Riaz' Speciality='General Practitioner' /></SwiperSlide>
//           <SwiperSlide><Doctor Country='Canada' img={canada} Name='Dr. Hareem Riaz' Speciality='General Practitioner' /></SwiperSlide>
//           <SwiperSlide><Doctor Country='Pakistan' img={male} Name='Dr. Hareem Riaz' Speciality='General Practitioner' /></SwiperSlide> */}
//           {/* <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//         </Swiper>
//       </Box>
//     </>
//   );
// }
