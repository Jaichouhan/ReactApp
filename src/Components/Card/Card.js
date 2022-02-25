import React, { useState } from 'react'

const Card = () => {
    const Data = [
        {
            id:1,
            img:"./images/propert1.png",
            price:"$13,000/mo",
            heading:'Renovated Luxury Apartment',
            design:" 2021 San Pedro, Los Angeles 90015",
            bed:'2',
            bath:'2',
            garage:'2',
            sqft:'1530'
        },
        {
            id:2,
            img:"./images/product01.png",
            price:"$11,000/mo",
            heading:'Renovated Luxury Apartment',
            design:" 2021 San Pedro, Los Angeles 90015",
            bed:'3',
            bath:'3',
            garage:'3',
            sqft:'1230'
        },
        {
            id:3,
            img:"./images/product02.png",
            price:"$18,000/mo",
            heading:'Renovated Luxury Apartment',
            design:" 2021 San Pedro, Los Angeles 90015",
            bed:'6',
            bath:'6',
            garage:'6',
            sqft:'1930'
        },
        {
            id:4,
            img:"./images/product03.png",
            price:"$16,000/mo",
            heading:'Renovated Luxury Apartment',
            design:" 2021 San Pedro, Los Angeles 90015",
            bed:'4',
            bath:'4',
            garage:'4',
            sqft:'1630'
        },
        {
            id:5,
            img:"./images/product04.png",
            price:"$10,000/mo",
            heading:'Renovated Luxury Apartment',
            design:" 2021 San Pedro, Los Angeles 90015",
            bed:'1',
            bath:'1',
            garage:'1',
            sqft:'1030'
        },
        {
            id:6,
            img:"./images/propert1.png",
            price:"$15,000/mo",
            heading:'Renovated Luxury Apartment',
            design:" 2021 San Pedro, Los Angeles 90015",
            bed:'2',
            bath:'2',
            garage:'2',
            sqft:'1530'
        }
    ]
    const [Details,setDetails] = useState(Data);
    
  return (
    <>
      <div className="Section_third_Space">
        <div className="container">
          <div className="row">
          {Details && Details.map((data) => (
                  <div className="col-lg-4 col-md-6" key={data.id}>
                  <div className="Section_third_bg">
                    <div className="img_hover_effect">
                      <div className="Section_third">
                        <img src={data.img} alt="img" />
                        <div className="Section_third_img">
                          <i className="fa fa-heart-o icon_center1"></i>
                        </div>
                      </div>
                    </div>
                    <div className="Section_third_Padding">
                      <button className="Section_third_btn" type="button">
                       {data.price}
                      </button>
                      <h5 className="Section_third_h5">{data.heading}</h5>
                      <p className="Section_third_p">
                        {data.design}
                      </p>
                      <div className="Section_third_flex">
                        <div className="">
                          <i className="fa fa-bed Section_third_i"></i>
                          <p className="Section_third_p1">
                            Beds <span className="Section_third_span">{data.bed}</span>
                          </p>
                        </div>
                        <div className="">
                          <i className="fa fa-bath Section_third_i"></i>
                          <p className="Section_third_p1">
                            Baths <span className="Section_third_span">{data.bath}</span>
                          </p>
                        </div>
                        <div className="">
                          <i className="fa fa-car Section_third_i"></i>
                          <p className="Section_third_p1">
                            Garages <span className="Section_third_span">{data.garage}</span>
                          </p>
                        </div>
                        <div className="">
                          <i className="fa fa-bed Section_third_i"></i>
                          <p className="Section_third_p1">
                            Sq Ft<span className="Section_third_span">{data.sqft}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          ))}
           
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Card