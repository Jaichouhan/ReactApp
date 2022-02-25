import React from 'react'
import { Link } from 'react-router-dom'
const Details = () => {
  return (
    <>
        <div className="Card_bg_color">
    <div className="container Card_bg_color_space">
        <div className="row">
            <div className="col-lg-8">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/images/31.jpg" className="d-block w-100" alt="img" />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/33.jpg" className="d-block w-100" alt="img" />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/34.jpg" className="d-block w-100" alt="img" />
                    </div>
                    <div className="carousel-item">
                      <img src="/images//35.jpg" className="d-block w-100" alt="img" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="slider_btn_style"> <i className="fa fa-angle-left"></i> </span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="slider_btn_style"><i className="fa fa-angle-right"></i></span>
                  </button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="Card_bg">
                    <div className="d-flex justify-content-between">
                        <button type="button" className="Card_btn">Showing Now</button>
                        <div><p className="Card_text">Book a Private Showing Today?</p></div>
                    </div>
                    <h1 className="Card_h1">$300.000</h1>
                    <p className="Card_p">Auction begins on February 23rd 11:00am</p>
                    <button className="Card_btn_style" type="button">
                      <div className="Cart_btn_hover_effect"></div>
                      <Link to="/" className="Card_a_tag_hover"> REGISTER TO BID </Link> <i className="fa fa-arrow-right Card_btn_style_i"></i></button>
                    <div className="Display_flex_between row">
                      <div className="col-md-6">
                        <div className="Card_section_first">
                            <i className="fa fa-comment Card_section_first_i"></i>
                            <p>Have a Questions? Ask the Owner</p>
                        </div>
                      </div>
                        <div className="col-md-6">
                        <div className="Card_section_Second">
                            <i className="fa fa-calendar Card_section_Second_i_sapce"></i>
                            <p>Book a Private Showing</p>
                        </div>
                      </div>
                    </div>
                    <div className="Card_section_last">
                      <div className="d-flex">
                        <i className="fa fa-phone Card_section_Second_i_sapce_red"></i>
                        <p className="Card_section_last_p">(613) 909-3805</p>
                      </div>
                        <div className="d-flex">
                          <Link to="/" className="card_share_icon_link">
                          <i className="fa fa-share card_share_icon"></i>
                       </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8">
                 <div className="Section_second_Card_bg">
                     <div className="Section_second_Card_bg_flex">
                         <button className="Section_second_Card_btn">FEATURED</button>
                         <button className="Section_second_Card_btn_S">FOR RENT</button>
                         <p className="Section_second_Card_p"><i className="fa fa-calendar"></i> May 27,2021</p>
                         <p className="Section_second_Card_p"><i className="fa fa-comments-o"></i> 35 Comments</p>
                     </div>
                     <h2 className="Section_second_Card_h2">Diamond Manor Apartment</h2>
                     <p className="Section_second_Card_p_S"><i className="fa fa-map-marker"></i> Belmont Gardens, Chicago</p>
                    
                     <h4 className="Section_second_Card_h4">Description</h4>
                    <p className="Section_second_Card_p_TH">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae molestias illo facere vel dignissimos optio nemo, harum tenetur modi quam maiores, magni delectus? Libero ab veniam dolor sit nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos neque voluptatum veniam temporibus sequi ut possimus magni libero nobis vel nulla delectus soluta, expedita nihil totam debitis. Excepturi, nostrum maxime?</p>

                    <div className="">
                        <h3 className="Section_second_Card_h3">Property Detail</h3>
                        <div className="Section_Third_Card_bg">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="">
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Property ID:</span>
                                            <p className="Section_Third_Card_p">HZ29</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Home Area:</span>
                                            <p className="Section_Third_Card_p">120 sqft</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Rooms:</span>
                                            <p className="Section_Third_Card_p">7</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Baths:</span>
                                            <p className="Section_Third_Card_p">2</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Year built:</span>
                                            <p className="Section_Third_Card_p">1992</p>
                                        </div>
                                    </div>
                                </div>
                                    
                                    <div className="col-lg-5">
                                        <div className="">
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Lot Area:</span>
                                            <p className="Section_Third_Card_p">HZ29</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Lot dimensions:</span>
                                            <p className="Section_Third_Card_p">120 sqft</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Beds:</span>
                                            <p className="Section_Third_Card_p">7</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Price:</span>
                                            <p className="Section_Third_Card_p">2</p>
                                        </div>
                                        <div className="d-flex">
                                            <span className="Section_second_Card_span">Property Status:</span>
                                            <p className="Section_Third_Card_p">For Sale</p>
                                        </div>
                                    </div>
                                    </div>

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="Section_four_Card_h4">Facts and Features</h4>
                        <div className="Section_four_Card row">
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                       
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                            <div className="Section_four_Card_Flex col-md-4 col-lg-4 col-xl-3">
                                <i className="fa fa-bed Section_four_Card_i"></i>
                                <div className="Section_four_Card_Div">
                                <p className="Section_four_Card_p">Living Room</p>
                                <span className="Section_four_Card_span">20 X 16 sq feet</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="Section_five_Card_h4">From Our Gallery</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="Section_five_Card_Margin">
                                <img src="./images/14.jpg" alt="img" className="Section_five_Card_img"/>
                                <img src="./images/15.jpg" alt="img" className="Section_five_Card_img_s"/>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Section_five_Card_Margin">
                                <img src="./images/16.jpg" alt="img" className="Section_five_Card_img_t" />
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="Section_six_Card_h4">Amenities</h4>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="ltn__menu-widget">
                                    <ul>
                                        <li>
                                            <label className="checkbox-item">Air Conditioning
                                                <i className="fa fa-check checkmark"></i>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Gym
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Microwave
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Swimming Pool
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">WiFi
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="ltn__menu-widget">
                                    <ul>
                                        <li>
                                            <label className="checkbox-item">Air Conditioning
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Gym
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Microwave
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Swimming Pool
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">WiFi
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="ltn__menu-widget">
                                    <ul>
                                        <li>
                                            <label className="checkbox-item">Air Conditioning
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Gym
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Microwave
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">Swimming Pool
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox-item">WiFi
                                                <i className="fa fa-check checkmark"></i>

                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="Section_seven_Card_h4">Location</h4>
                        <iframe title="My Daily Marathon Tracker" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14231.00901291543!2d75.7327905!3d26.9113567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1a3a89b8a640bc9!2sEoxys%20IT%20solution%20LLP!5e0!3m2!1sen!2sin!4v1645534760395!5m2!1sen!2sin" width="100%" height="450" loading="lazy" className='iframe_style'></iframe>
                    </div>

                 </div>
            </div>
        </div>
  </div>
</div>
    </>
  )
}

export default Details