import vedio from "../src/asset/bbb.mp4"
function Demo2(){
    return(
       <div>
        <div className="h100"></div>
        <div className="container">
          <div className="row"> 
            <div className="col-12  p-5  col-sm-6">
             <p><video className="pimg mh500 " controls >
      <source src={ vedio} type="video/mp4"/>
     </video></p>
            </div>

            <div className="col-12 p-5 col-sm-6">
              <p className="cr about">ABOUT</p>
              <p style={{ lineHeight: '1.5' }}></p>
              <h1 className="text">You Always 
              Get your help</h1>
              <div className="h30"></div>
              <h5>Apparently we had reached a great heaight in the 
              {/* <p style={{ lineHeight: '1.5' }}></p> */}
              atmosphere,for the skywas dead black </h5>
              <div className="h30"></div>
              <h6 className="cg">Though the gravity still dragged at him,his muscles were making 
              {/* <p style={{ lineHeight: '1.5' }}></p> */}
              greater efforts to adjust. After the daily classes hr no longer collapsed 
              {/* <p style={{ lineHeight: '1.5' }}></p> */}
              immediately into bed</h6>
        <button className="cr mt-5 brn p-2 bw120px bgg aic"> Read more</button>

            </div>
          </div>
        </div>
        <div className="h100"></div>
       </div>
    )
}
export default Demo2;