import PropTypes from "prop-types";


const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};


export default Button;

// Button.PropTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   onClick: PropTypes.func,
// };
