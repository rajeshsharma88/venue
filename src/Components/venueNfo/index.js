import React from "react";
import { Zoom } from "react-awesome-reveal";
import icon_calender from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calender})`,
                    }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_description">Dec, 12, 2021, 07:00pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`,
                    }}
                  ></div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_description">Nehru Stadium, New Delhi</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
