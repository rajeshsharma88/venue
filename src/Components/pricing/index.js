import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry",
      "Lorem Ipsum 20 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "Lorem Ipsum  30 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    ],
    linkto: ["https://google.com", "https://bing.com", "https://yahoo.com"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>Rs{priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[index]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{
                color: "#ffffff",
              }}
              link={priceState.linkto[index]}
            />
          </div>
        </div>
      </Zoom>
    ));
  return (
    <div className="bck_black">
      <div className=" center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
