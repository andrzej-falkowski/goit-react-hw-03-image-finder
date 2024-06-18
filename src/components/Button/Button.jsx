import PropTypes from "prop-types";

export const Button = ({ onloadMore }) => {
  return (
    <button type="button" onClick={onloadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
