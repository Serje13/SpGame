import React from "react";

const TitleImage = () => {
  return (
    <div
      className="container-fluide"
      style={{ position: "relative", width: "100%", height: "auto" }}
    >
      <img
        className="img-fluid"
        src="concept_main.jpg"
        alt=""
        style={{ display: "block" }}
      />
      <div className="g-name-container">
        <p className="g-name">BETWEEN REALMS</p>
      </div>
    </div>
    //working variant but NOT GOOD
    //   <div className="container-fluid maxx">
    //   <img src="concept_main.jpg" className="img-fluid" alt="" />
    //   <div className="g-name-container">
    //     <p className="g-name">BETWEEN REALMS</p>
    //   </div>
    // </div>
  );
};

export default TitleImage;
