import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div
        className="row  no-gutter"
        style={{
          justifyContent: "center",
          padding: "1rem"
        }}
      >
        <div>
          <img
            className="rounded"
            src="fbB1.png"
            style={{
              backgroundColor: "white",
              marginLeft: "20px",
              marginRight: "20px"
            }}
          />
        </div>
        <div>
          <img
            className="rounded"
            src="twitB.png"
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              backgroundColor: "white"
            }}
          />
        </div>
      </div>
      <div className="row  no-gutter">
        <div className=" col-sm-4 col-sm-6 col-md-9 col-lg-3">
          <img src="logo_ovva9.jpg" className="logo" />
        </div>
      </div>
      <div
        className="row  no-gutter"
        style={{
          justifyContent: "center"
        }}
      >
        <div style={{ color: "white" }}>info@ovvagames.com</div>
      </div>
    </div>
  );
};

export default Footer;
