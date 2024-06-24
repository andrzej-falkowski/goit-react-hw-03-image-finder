import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = (props) => {
  return props.images.map((photo, id) => (
    <li key={id} className={styles.galleryItem}>
      <a href={photo.largeImageURL}>
        <img src={photo.webformatURL} alt={photo.tags} />
      </a>
    </li>
  ));
};

export { ImageGalleryItem };
