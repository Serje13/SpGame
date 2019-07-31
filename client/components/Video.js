import React from "react";

const Video = () => {
  return (
    <div className="video-container">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Video;
