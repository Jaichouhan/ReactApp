import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Section_six">
        <div className="Section_six_Sapce">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <ul className="Section_six_Heading_ul">
                  <li className="Section_six_Heading">
                    <Link to="/">
                      <img src="./images/lofo-f.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <p className="Section_six_p">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </li>
                  <li className="Section_five_li">
                    Follow Us
                    <div className="Section_five_li_margin">
                      <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer">
                        <i className="fa fa-facebook-f Section_six_i"></i>
                      </a>
                      <a
                        href="https://twitter.com/i/flow/login"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-twitter Section_six_i"
                          id="hover_effect"
                        ></i>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer">
                        <i
                          className="fa fa-instagram Section_six_i"
                          id="hover_effect1"
                        ></i>
                      </a>
                      <a href="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer">
                        <i
                          className="fa fa-youtube-play Section_six_i"
                          id="hover_effect2"
                        ></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ul className="Section_six_Heading_ul">
                  <li className="Section_six_Heading">
                    <Link to="/">Selling</Link>
                  </li>
                  <li className="Section_six_Heading_li">
                    <Link to="/">How to Sell</Link>
                  </li>
                  <li className="Section_six_Heading_li1">
                    <Link to="/">Appraise Your Home</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ul className="Section_six_Heading_ul">
                  <li className="Section_six_Heading">
                    <Link to="/">Our Company</Link>
                  </li>
                  <li className="Section_six_Heading_li1">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li className="Section_six_Heading_li1">
                    <Link to="/">About Us</Link>
                  </li>
                  <li className="Section_six_Heading_li1">
                    <Link to="/">Media&amp; News</Link>
                  </li>
                  <li className="Section_six_Heading_li1">
                    <Link to="/">Career Opportunities</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <ul className="Section_six_Heading_ul">
                  <li className="Section_six_Heading">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <div className="Section_six_Flex">
                      <Link to="/">
                        <i className="fa fa-phone"></i>{" "}
                      </Link>
                      <p>
                        <Link to="/">Phone</Link>
                      </p>
                    </div>
                    <div>
                      <Link to="/" className="a_tag_style"> 1 (613)-909-4015</Link>
                    </div>
                  </li>
                  <li className="Section_six_Heading_email">
                    <div className="Section_six_Flex">
                      <Link to="/">
                        <i className="fa fa-envelope"></i>
                      </Link>
                      <p>
                        <Link to="/">Email</Link>
                      </p>
                    </div>
                    <div>
                      <Link to="/" className="a_tag_style">
                        {" "}
                        nfo@unreserved.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="Section_last">
            Copyright © 2022 Loremipsum. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
