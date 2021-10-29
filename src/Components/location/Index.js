import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.564070526082!2d77.2321778152662!3d28.582850293078195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f93178ea85%3A0x639d387dcb58c69!2sJawaharlal%20Nehru%20Stadium%2C%20Delhi!5e0!3m2!1sen!2s!4v1635431517395!5m2!1sen!2s"
        width="100%"
        height="500px"
        frameBorder="0"
        title="gglemaps"
        allowFullScreen
      ></iframe>
      <div className="location_tag">Location</div>
    </div>
  );
};

export default Location;
