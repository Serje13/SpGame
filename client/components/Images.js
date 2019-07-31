import React from "react";
import ImageModal from "./ImageModal";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      imagesrc: ""
    };
    this.showImage = this.showImage.bind(this);
  }

  showImage(e) {
    // console.log(e.currentTarget.src);
    // console.log(src);
    if (this.ImageModal) {
      this.ImageModal.showModal();
    }
    this.setState({
      // modalShow: true,
      imagesrc: e.currentTarget.src
    });
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div>
        <div className="container-fluid ">
          <div className="row  no-gutter">
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_001.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
              {/* </button> */}
            </div>
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_002.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_003.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_004.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
          </div>
          <div className="row  no-gutter">
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_004.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_005.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_006.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
            <div className="col-sm-4 col-sm-6 col-md-9 col-lg-3">
              <img
                style={{ width: "100%", height: "100%" }}
                src="BR_shot_006.jpg"
                alt=""
                className="rounded"
                onClick={e => this.showImage(e)}
              />
            </div>
          </div>
        </div>
        <ImageModal
          // show={this.state.modalShow}
          // onHide={modalClose}
          src={this.state.imagesrc}
          ref={ref => (this.ImageModal = ref)}
        />
      </div>
    );
  }
}
export default Images;
