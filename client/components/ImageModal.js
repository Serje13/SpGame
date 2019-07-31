import React from "react";
// import { Modal } from "react-bootstrap";
// import { CloseButton } from "react-bootstrap";
// import { Image } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  showModal() {
    this.setState({ isOpen: true });
  }
  render() {
    const { isOpen } = this.state;
    const src = this.props.src;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={src}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
      // <Modal
      //   {...this.props}
      //   // size="lg"
      //   // aria-labelledby="example-modal-sizes-title-lg"
      //   size="lg"
      //   aria-labelledby="contained-modal-title-vcenter"
      //   centered
      //   // dialogClassName="modal-90w"
      //   // aria-labelledby="example-custom-modal-styling-title"
      // >
      //   <Modal.Header
      //     closeButton
      //     style={{ backgroundColor: "black", color: "white" }}
      //   />
      //   <Image src={this.props.src} fluid />
      // </Modal>
    );
  }
}
export default ImageModal;
