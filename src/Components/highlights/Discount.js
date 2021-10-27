import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);
  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };
  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase Ticket Before 15 Nov, 2021</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              dicta quos eaque quibusdam incidunt qui mollitia nam beatae
              deserunt optio, quia cupiditate omnis enim ipsam aliquam
              asperiores illo, labore corporis!
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
