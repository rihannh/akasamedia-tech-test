import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ href, children }) {
  return (
    <Link to={href}>
      <button className='ring-offset-background inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500/90'>
        {children}
      </button>
    </Link>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};
