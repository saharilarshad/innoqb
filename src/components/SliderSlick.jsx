import React, { useEffect, useState } from "react";
// import { IoIosArrowDropleft as ArrowLeft } from "react-icons/io";
// import { IoIosArrowDropright as ArrowRight } from "react-icons/io";
import { AiFillStar as Star } from "react-icons/ai";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderslick.css";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Discount = ({ price, disc }) =>
  parseFloat(price - (disc / 100) * price).toFixed(2);

function SliderSlick() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const resData = res.data.products;
      // console.log(resData);
      setData(resData);
    };
    getData();
  }, []);

  const starArray = [...Array(5).keys()].map((i) => i + 1);

  // const Rating = ({ rating }) =>
  //   starArray.map((i) => (
  //     <Star key={i} color={rating >= i ? "gold" : "lightgray"} />
  //   ));

  console.log(data);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick">
      <h1 className="main-title">Flash Deals</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="card">
            <div className="card-top">
              <h4
                style={{
                  backgroundColor: item.discountPercentage ? "pink" : "none",
                  color: item.discountPercentage ? "#D6185A" : "none",
                  width: item.discountPercentage ? "35px" : "0",
                  borderRadius: "3px",
                  padding: "5px",
                }}
              >
                Sale
              </h4>
              <img src={item.images[0]} alt={item.title} />
              <div className="card-bottom">
                {/* <Rating rating={item.rating} /> */}
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={item.rating}
                    precision={0.5}
                  />
                </Stack>
                <p>{`${item.description.substring(0, 35)}`}</p>
                <div className="price">
                  <h4>
                    <s>${item.price}</s>
                  </h4>
                  <p>From</p>
                  <h4
                    style={{ color: item.discountPercentage ? "red" : "black" }}
                  >
                    $
                    <Discount
                      price={item.price}
                      disc={item.discountPercentage}
                    />
                  </h4>
                </div>
                <div className="color">
                  <div className="black"></div>
                  <div className="cream"></div>
                  <div className="gray"></div>
                  <div className="orange"></div>
                </div>
                <button className="addCart">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderSlick;
