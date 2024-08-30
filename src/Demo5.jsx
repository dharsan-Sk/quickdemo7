import operation from "./Operation.jpg"
import { FaHospital } from "react-icons/fa";
function Demo5() {
    return (
        <div className="container ofxy ">
            <div className="row p-5">
                <div className="col-12 ">
                    <div className=" mt-5" >
                        <h6 className="cr mt-5">FEATURES</h6>
                        <p className="bold mt-3">Our spaciality</p>
                        <h6 className="mb-3 content">Though the gravity still dragged at, him muscles
                            were making  <br />grate efforts to adjust</h6>
                    </div><div className="row flexr">
                        <div className=" bgy brn p-5 mw100 w80 mfl ">
                            <div className="col-12 col-sm-2 di fr maic fr1 mfl ">  <FaHospital size={70} className="b150 mt-4 es m-3 cw p-3 " />

                            </div>
                            <div className="col-12 col-sm-5 mfl maic fr">
                                <div className="col-11">
                                <h4 className="mt-4 mb-3 ">Online Appoinment</h4>
                                <p>What looks like a small patch of perpel
                                    grass, above five feet square ,was moving</p>
                                <button className="brn rmb p-1 bw120px aic"> Read more </button></div>
                                <div className="col-1"></div>
                            </div>

                        </div></div>
                </div>
                <div className="col-12 z2  relative ">
                    <p className="  mt-5">
                        <p className="w50 ">
                            <img src={operation} className="w100 mw100 mt-5 brn" alt="" /></p>
                    </p>
                </div>

            </div>
        </div>

    )
}
export default Demo5;