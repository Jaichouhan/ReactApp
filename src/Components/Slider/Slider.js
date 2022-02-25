import React from 'react'
import Slider from "react-slick";
const SliderShow = () => {
    var settings = {
      arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
       <div className="wrapper">
            <div className="SlickSlider row">
            <Slider {...settings}>
              <div className="col-lg-4 col-md-4">
                <div className="Section_four_CArd">
                  <p className="Section_four_p1">
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos vitae sed placeat
                    adipisci, deleniti iste? Sit accusantium repellendus
                    aspernatur consequatur aperiam similique reprehenderit eaque
                    neque, ea quos possimus laboriosam nemo.
                  </p>

                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/1644386292.png"
                        alt="img"
                        className="Section_four_space_img"
                      />
                    </div>
                    <div className="Section_four_space">
                      <h5 className="Section_four_space_h5">Jacob William</h5>
                      <p className="Section_four_space_p">SELLING AGENTS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="Section_four_CArd">
                  <p className="Section_four_p1">
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos vitae sed placeat
                    adipisci, deleniti iste? Sit accusantium repellendus
                    aspernatur consequatur aperiam similique reprehenderit eaque
                    neque, ea quos possimus laboriosam nemo.
                  </p>

                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/1644386292.png"
                        alt="img"
                        className="Section_four_space_img"
                      />
                    </div>
                    <div className="Section_four_space">
                      <h5 className="Section_four_space_h5">Jacob William</h5>
                      <p className="Section_four_space_p">SELLING AGENTS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="Section_four_CArd">
                  <p className="Section_four_p1">
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos vitae sed placeat
                    adipisci, deleniti iste? Sit accusantium repellendus
                    aspernatur consequatur aperiam similique reprehenderit eaque
                    neque, ea quos possimus laboriosam nemo.
                  </p>

                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/1644386292.png"
                        alt="img"
                        className="Section_four_space_img"
                      />
                    </div>
                    <div className="Section_four_space">
                      <h5 className="Section_four_space_h5">Jacob William</h5>
                      <p className="Section_four_space_p">SELLING AGENTS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="Section_four_CArd">
                  <p className="Section_four_p1">
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos vitae sed placeat
                    adipisci, deleniti iste? Sit accusantium repellendus
                    aspernatur consequatur aperiam similique reprehenderit eaque
                    neque, ea quos possimus laboriosam nemo.
                  </p>

                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/1644386292.png"
                        alt="img"
                        className="Section_four_space_img"
                      />
                    </div>
                    <div className="Section_four_space">
                      <h5 className="Section_four_space_h5">Jacob William</h5>
                      <p className="Section_four_space_p">SELLING AGENTS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="Section_four_CArd">
                  <p className="Section_four_p1">
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos vitae sed placeat
                    adipisci, deleniti iste? Sit accusantium repellendus
                    aspernatur consequatur aperiam similique reprehenderit eaque
                    neque, ea quos possimus laboriosam nemo.
                  </p>

                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/1644386292.png"
                        alt="img"
                        className="Section_four_space_img"
                      />
                    </div>
                    <div className="Section_four_space">
                      <h5 className="Section_four_space_h5">Jacob William</h5>
                      <p className="Section_four_space_p">SELLING AGENTS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="Section_four_CArd">
                  <p className="Section_four_p1">
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos vitae sed placeat
                    adipisci, deleniti iste? Sit accusantium repellendus
                    aspernatur consequatur aperiam similique reprehenderit eaque
                    neque, ea quos possimus laboriosam nemo.
                  </p>

                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/1644386292.png"
                        alt="img"
                        className="Section_four_space_img"
                      />
                    </div>
                    <div className="Section_four_space">
                      <h5 className="Section_four_space_h5">Jacob William</h5>
                      <p className="Section_four_space_p">SELLING AGENTS</p>
                    </div>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
    
    </>
  )
}

export default SliderShow;