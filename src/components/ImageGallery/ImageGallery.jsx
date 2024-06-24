import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.scss";

const ImageGallery = (props) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem {...props} />
    </ul>
  );
};

export { ImageGallery };
