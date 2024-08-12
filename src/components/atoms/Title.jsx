import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.string,
};
