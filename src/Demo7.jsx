
import React from "react";
import Slider from "react-slick";
import img1 from './1.jpeg'
import img2 from "./2.webp"
import img3 from "./3.jpeg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
function Demo7() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (<div>
    <div className="slider-container ofxy container">
        <div className="es">
            <h6 className="mt-5 cr">TEAM</h6>
            <p className="mt-3 bold">Our Docters </p>
        </div>
      <Slider {...settings}>
        <div className="p-5 brn bgg mhw"> 
          <span className="es" ><div className="fhw">
            <img src={img1 } className="mbr fhw fimg"  alt="" />
            </div>
          <h1 className="bold1 mt-3">Florieke Krebber
            </h1>
            <p className="cg mt-3">cardiology</p><p className="cr"><FaFacebook size={30}className="m-2" /><AiFillTwitterCircle size={30} className="m-2"/>
            <FaSquareInstagram size={30}className="m-2"/></p>
            </span>

        </div>
        <div className="p-5 brn mhw  bgg ">
        <span className="es" ><div className="fhw">
          <img src={img2 } className=" mbr fhw fimg"  alt="" /></div>
        <p className="bold1 mt-3">Riley Copper</p>
        <p className="cg">cardiology</p>
        <p className="cr"><FaFacebook size={30}className="m-2" /><AiFillTwitterCircle size={30} className="m-2"/>
        <FaSquareInstagram size={30}className="m-2"/></p>
        </span>
        </div>
        <div className="p-5 brn mhw  bgg ">
          
        <span className="es "> <div className="fhw"><img src={img3 } className=" mbr fhw fimg"  alt="" /></div>
        <p className="bold1 mt-3">Sampson Totton</p>
        <p className="cg">cardiology</p>
        <p className="cr"><FaFacebook size={30}className="m-2  " /><AiFillTwitterCircle size={30} className="m-2"/>
        <FaSquareInstagram size={30}className="m-2"/></p>
        </span>
        </div>
        
        
      </Slider>
      <div className="es mb-5"><button className="button1 p-1 tb mt-3 bw120px">See all</button></div>
    </div><hr className="cr" />
    </div>
  );
}

export default Demo7;
