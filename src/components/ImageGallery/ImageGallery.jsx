import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

import styles from "./ImageGallery.module.scss";

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map((image, idx) => (
          <ImageGalleryItem key={idx} image={image} />
        ))}
      </ul>
    );
  }
}

export { ImageGallery };
