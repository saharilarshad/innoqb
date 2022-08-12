import React, { useEffect, useState } from "react";
import "./slider.css";
import { IoIosArrowDropleft as ArrowLeft } from "react-icons/io";
import { IoIosArrowDropright as ArrowRight } from "react-icons/io";
import { AiFillStar as Star } from "react-icons/ai";
import axios from "axios";

function Slider() {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = data.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 5);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide + 1);
  };


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const resData = res.data.products;
      // console.log(resData);
      setData(resData);
    };
    getData();
  }, []);

  console.log(data);

  const starArray = [...Array(5).keys()].map((i) => i + 1);

  const Rating = ({ rating }) =>
    starArray.map((i) => (
      <Star key={i} color={rating >= i ? "gold" : "lightgray"} />
    ));

  // const discountPrice = ({price}) => data.discountPercentage / 100 * data.price;

  const Discount = ({ price, disc }) =>
    parseFloat(price - (disc / 100) * price).toFixed(2);

  return (
    <div className="sliderContainer">
      <h1 className="deals">Flesh Deals</h1>
      <div
        className="arrow"
        // direction="left"
        onClick={prevSlide}
      >
        <ArrowLeft size={"30px"} />
      </div>
      <div className="sliderWrapper">
        {data.map((item, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={item.id}
            >
              {index === currentSlide && (
                <>
                  <div className="imgCon">
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className="infoCon">
                    <div className="star">
                      {/* ({Number(item.rating).toFixed(1)}){" "} */}
                      <Rating rating={item.rating} />
                    </div>
                    <p className="desc">{`${item.description.substring(0, 35)}`}</p>
                    <div className="price">
                      <h4 className="oldprice">
                        <s>${item.price}</s>
                      </h4>
                      <p>From</p>
                      <h4 className="newPrice">
                        $
                        <Discount
                          price={item.price}
                          disc={item.discountPercentage}
                        />
                      </h4>
                    </div>
                    <div className="color"></div>
                    <button className="addCart">Add To Cart</button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div
        className="arrow"
        // direction="right"
        onClick={nextSlide}
      >
        <ArrowRight size={"30px"} />
      </div>
    </div>
  );
}

export default Slider;
