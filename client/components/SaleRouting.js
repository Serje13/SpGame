import React from "react";

const SaleRouting = () => {
  return (
    <div className="container-fluid">
      <div className="row  no-gutter">
        {/* <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
          <a href="#">
            <img
              src="Amazon.png"
              className=" img-thumbnail"
              style={{ width: "340px", height: "100%" }}
            />
          </a>
        </div> */}
        <div className=" col-sm-4 col-sm-6 col-md-9 col-lg-3">
          <a href="https://www.apple.com/ios/app-store/">
            <img
              src="AppStore.png"
              className="sale img-thumbnail"
              // style={{ width: "340px", height: "340%" }}
            />
          </a>
        </div>
        <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
          <a href="https://play.google.com/store">
            <img
              src="GooglePlay.png"
              className="sale img-thumbnail"
              // style={{ width: "300px", height: "100%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaleRouting;
