import PropTypes from "prop-types";

export default function SubTitle({ children, color }) {
  return (
    <h2 className={`${color? 'text-violet-500':''} scroll-m-20 text-3xl font-semibold tracking-tight`}>
      {children}
    </h2>
  );
}

SubTitle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};
