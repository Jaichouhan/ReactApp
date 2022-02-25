import React from "react";
import {Link} from "react-router-dom";
import SecondSlider from "../Slider/SecondSlider";
import SliderShow from "../Slider/Slider";
import Card from "../Card/Card";
const Home = () => {
  return (
    <>
      <div className="container-fluid bg-img">
        <div className="container">
          <div className="section_bg_set">
            <h1 className="section_bg_set_h1">THE WAY</h1>
            <h2 className="section_bg_set_h2">Selling your home</h2>

            <p className="section_bg_set_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>

            <button type="button" className="btn btn-danger section_bg_set_btn">
              <div className="btn_hover_effect1"></div>
              <Link to="/" className="a_underline">
                Learn how you can sell
             </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="Section_second">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 Section_second_first">
              <h1 className="Section_second_first_h1">How it work</h1>
            </div>
            <div className="col-lg-3 Section_second_Second">
              <div className="">
                <h4 className="Section_second_first_h4">Home Stage 1</h4>
                <p className="Section_second_first_p">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <button type="button" className="btn Section_second_first_btn">
                  Coming Soon
                </button>
              </div>
            </div>

            <div className="col-lg-3 Section_second_Second">
              <h4 className="Section_second_first_h4">Home Stage 1</h4>
              <p className="Section_second_first_p">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button type="button" className="btn Section_second_Second_btn">
                Showing Soon
              </button>
            </div>

            <div className="col-lg-3 Section_second_Thrid">
              <h4 className="Section_second_first_h4">Home Stage 1</h4>
              <p className="Section_second_first_p">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button type="button" className="btn Section_second_Thrid_btn">
                Active Bidding
              </button>
            </div>
          </div>
        </div>
      </div>
      <Card />

      <div className="Section_four_bg">
        <div className="container">
          <div className="Section_four_P2">
            <p className="Section_four_p">Our Testimonial</p>
          </div>
          <h1 className="Section_four_h1">Clients Feedback</h1>

          <SliderShow />
        </div>
      </div>

      <div className="container">
        <div className="Section_four_P2">
          <p className="Section_four_p">News &amp; Blogs</p>
        </div>
        <h1 className="Section_four_h1">Leatest News Feeds</h1>
        <SecondSlider />
      </div>
    </>
  );
};

export default Home;
