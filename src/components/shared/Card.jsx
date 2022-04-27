import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  const cardStyle = reverse ? 'card reverse' : 'card';
  return <div className={cardStyle}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.protoTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool,
};

export default Card;
