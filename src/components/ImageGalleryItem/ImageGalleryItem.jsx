import { Component } from "react";
import Modal from "../Modal/Modal";
import styles from "./ImageGalleryItem.module.scss";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { image } = this.props;
    return (
      <>
        <li className={styles.imageItem} onClick={this.toggleModal}>
          <img src={image.webformatURL} alt={image.tags} />
        </li>
        {this.state.showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClick={() => this.toggleModal()}
          />
        )}
      </>
    );
  }
}

export { ImageGalleryItem };
