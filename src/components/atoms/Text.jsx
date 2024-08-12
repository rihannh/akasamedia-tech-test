import PropTypes from "prop-types";

export default function Text({ children }) {
  return <div>{children}</div>;
}

Text.propTypes = {
  children: PropTypes.string,
};
