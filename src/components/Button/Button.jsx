import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ onButtonClick }) => {
  return (
    <button className={styles.loadMoreBtn} type="button" onClick={onButtonClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export { Button };
