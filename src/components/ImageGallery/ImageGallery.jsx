import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.scss";

const ImageGallery = (props) => {
  // console.log(props)
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem {...props} />
    </ul>
  );
};

export { ImageGallery };
