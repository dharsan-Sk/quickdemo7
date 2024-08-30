import React from "react";
import Slider from "react-slick";
import { FaClockRotateLeft, FaPenToSquare } from "react-icons/fa6";
import { LiaUserNurseSolid } from "react-icons/lia";
import { BiCurrentLocation } from "react-icons/bi";


function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
  return (
    <div className="bgg">
      <div className="slider-container container ofxy">
        <Slider {...settings}>
          <div>
            <div className="p-3 mt-5 bgwcr br20"><div className="dflxsb">
              <h4>opening Hours </h4><span className="fl"><FaClockRotateLeft size={40} /></span> </div>
              <p>Monday-Friday <br />9.00am-10am</p>
              <p className="pt24px">address <br />7563 St vages place</p>
            </div>
          </div>
          <div>
            <div className="p-3 mt-5 button21">
              <h4>Appoint <span className="fl"><FaPenToSquare size={40} /></span> <br />ment</h4>
              <p style={{ lineHeight: '1.5' }}></p>
              <p className="mt-3 cg">Peep at some distance orb has power to rise and purify</p>
              <p style={{ lineHeight: '1.5' }}></p>
              <button className="b350 p-1 w55 mt-4 brn ">Request</button>
            </div>
          </div>
          <div>
            <div className="p-3 mt-5 button21">
              <h4>Find <span className="fl"><LiaUserNurseSolid size={55} /></span> <br />Food</h4>
              <p style={{ lineHeight: '1.5' }}></p>
              <p className="mt-3 cg">Peep at some distance orb has power to rise and purify</p>
              <p style={{ lineHeight: '1.5' }}></p>
              <button className=" p-1 w55 mt-4 brn b350 ">Doctors</button>
            </div>
          </div>
          <div>
            <div className="p-3 mt-5 button21">
              <h4>Find <span className="fl"><BiCurrentLocation size={49} /></span> <br />Location</h4>
              <p style={{ lineHeight: '1.5' }}></p>
              <p className="mt-3 cg">Peep at some distance orb has power to rise and purify</p>
              <p style={{ lineHeight: '1.5' }}></p>
              <button className=" p-1 w55 mt-4 brn b350">Locations</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
