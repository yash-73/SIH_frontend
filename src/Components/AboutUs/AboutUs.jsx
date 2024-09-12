// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {
  const members = [
    {
      name: "Shreya Bhide",
      role: "TE-01",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi nulla voluptates eius ipsa voluptatum est, optio perferendis explicabo laboriosa",
    },
    {
      name: "Samali Rajderkar",
      role: "TE-10",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi nulla voluptates eius ipsa voluptatum est, optio perferendis explicabo laboriosa",
    },
    {
      name: "Tina Chugera",
      role: "TE-08",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi nulla voluptates eius ipsa voluptatum est, optio perferendis explicabo laboriosa",
    },
    {
      name: "Harshwardhan Sawant",
      role: "TE-08",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi nulla voluptates eius ipsa voluptatum est, optio perferendis explicabo laboriosam",
    },
    {
      name: "Yash Shinde",
      role: "TE-01",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi nulla voluptates eius ipsa voluptatum est, optio perferendis explicabo laboriosam,",
    },
    {
      name: "Gauri Desale",
      role: "TE-08",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi nulla voluptates eius ipsa voluptatum est, optio perferendis explicabo laboriosam, ",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    ]
  };

 
  return (
    <div className="flex flex-col  items-center w-full">
      <div className="mx-4 my-8  w-[60%] max-lg:w-[80%] rounded-3xl border-[1px] border-gray-600  flex flex-row justify-center items-center p-4  max-md:flex-col">
        <div className="flex flex-col max-lg:w-full w-[50%] items-center justify-around gap-8">
          <h1 className="font-bold text-3xl text-[#009921]  text-center">
            Our Vision
          </h1>
          <img
            src="https://images.pexels.com/photos/14689034/pexels-photo-14689034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-[85%] rounded-full border-[1px] border-gray-600 opacity-[90%] lg:hidden aspect-square  min-w-[300px] max-w-[350px]"
          />
          <p className="text-center my-4">
            To empower farmers globally with accessible technology that ensures
            healthy crops, reduces agricultural losses, and contributes to
            sustainable farming by offering accurate, real-time disease
            detection.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/14689034/pexels-photo-14689034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-[45%] rounded-full border-[1px] border-gray-600 opacity-[90%] aspect-square max-lg:hidden min-w-[300px] max-w-[350px]"
        />
      </div>

      <h1 className="font-bold text-3xl text-[#009921] mt-16  text-center">
        Our Mission
      </h1>

      <div className="flex max-md:flex-col max-md:items-center flex-row my-8 p-4 w-full flex-wrap justify-around">
        <div className="flex flex-col items-center w-[40%] p-4 gap-2 border-[1px] border-gray-400 my-4 max-md:w-full rounded-xl">
          <h2 className="font-bold text-[#009921]">Technology for All</h2>
          <p className="text-center">
            To build a user-friendly platform that provides farmers with
            cutting-edge image processing and machine learning tools to diagnose
            crop diseases accurately.
          </p>
        </div>
        <div className="flex flex-col items-center w-[40%] p-4 gap-2 border-[1px] border-gray-400 my-4 max-md:w-full rounded-xl">
          <h2 className="font-bold text-[#009921]">Sustainability</h2>
          <p className="text-center">
            To promote sustainable farming practices by providing real-time
            insights into crop health and offering practical solutions for
            disease management.
          </p>
        </div>
        <div className="flex flex-col items-center w-[40%] p-4 gap-2 border-[1px] border-gray-400 my-4 max-md:w-full rounded-xl">
          <h2 className="font-bold text-[#009921]">Education and Awareness</h2>
          <p className="text-center">
            To educate farmers on how to detect, prevent, and manage crop
            diseases, fostering greater awareness and self-reliance.
          </p>
        </div>
        <div className="flex flex-col items-center w-[40%] p-4 gap-2 border-[1px] border-gray-400 my-4 max-md:w-full rounded-xl">
          <h2 className="font-bold text-[#009921]">Innovative Agriculture</h2>
          <p className="text-center">
            To continuously innovate in the field of agricultural technology,
            ensuring farmers have the latest tools to safeguard their crops and
            livelihoods.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full  my-16">
        <h2 className="font-semibold text-xl text-[#009921] mb-8">Our Team</h2>
        <div className="w-[80%] max-lg:w-full m-aut0 px-20 max-md:px-10 ">
          <Slider {...settings}>
          {members.map((member)=>(
            <div key={member.name} className="flex flex-col border-[1px] justify-end border-gray-400 items-end p-4 rounded-xl h-[450px] ">

            <div className="flex flex-row justify-center items-center mt-4 ">
            <img   className=" rounded-full aspect-square border-[1px] border-gray-400 h-40" />
            </div>
              
            
            <div className="flex flex-col gap-4 mt-12 ">
              <p className="text-center font-semibold text-xl text-[#009921]">{member.name}</p>
              <p className="text-center font-semibold">{member.role}</p>
              <p className="text-center">{member.bio}</p>
            </div>

          </div>
         ))}
         </Slider>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
