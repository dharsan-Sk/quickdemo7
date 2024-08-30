
import React from "react";
import medicen from "./medicen.jpeg"
import { TbDental } from "react-icons/tb";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { GiAmbulance } from "react-icons/gi";

function Demo4() {
  
  return (
    <div className="bgg ">
    <div className="container">
        <div>
        
            <h6 className="es pt-5 cr">SERVICE</h6>
            <h1 className="es pb-5">Our medical project</h1>
        </div>
        <div className=" row">
        <div className="col-12 col-lg-6 resscroll">
    <p className="fr button21 m-3 p-3 es w33">
        <p className="b250  p-4"><TbDental size={60} />
        </p>
        <h5>
            Dental
        </h5>
    </p>
    <p className="fr m-3 button21 es p-3 w33">
        <p className=" b250 p-4"><FaHouseMedicalCircleCheck size={60} />
        </p>
        <h5>Medicien</h5>
    </p>
    <p className="fr m-3 button21 es p-3 w33">
        <p className=" b250 p-4"><FaHeartbeat  size={60}/></p>
        <h5>Cardeology</h5>
    </p>
    <p className="fr m-3 button21 p-3 es w33">
        <p className=" b250 p-4"><FaEye size={60}/></p>
        <h5>Eye Care</h5>
    </p>
    <p className="fr m-3 button21 p-3 es w33">
        <p className=" b250 p-4"><GiLoveInjection size={60}/></p>
        <h5>Primery Care</h5>
    </p>
    <p className="fr m-3 button21 p-3 es w33">
        <p className="b250 p-4"><GiAmbulance size={60}/></p>
        <h5>Orthopedic</h5>
    </p>
    </div>
    <div className="col-12 col-lg-6">
      <p className="mb0">  <img src={medicen}  className="h200 mb0"  alt="" /></p>
        
        <div className="p-4 bgw brn mt0"><h3>Dental Care Services</h3>
        <p className="cg">As I am went on,still gaining velocity,the palpitation of night and day 
        merged into one continuse greyness sky took on a wonderful </p>
        <button className="cr mt-5 brn p-1 aic bw120px bgg "><h6 className="">Learn more</h6></button>
        </div></div>
        </div></div>
        <div className="h100"></div></div>
  );
}

export default Demo4;
