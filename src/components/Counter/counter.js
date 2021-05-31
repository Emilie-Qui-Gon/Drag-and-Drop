import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';


const Counter = ({ count }) => {
  let message = 'Aucune tâche en cours';
  if (count === 1) {
    message = 'Vous avez 1 tâche en cours';
  }
  else if (count > 1) {
    message = `Vous avez ${count} tâches en cours`;
  }

  return (
    <p className="counter">{message}  <i class="fa fa-spinner fa-spin"></i></p>
  );
};
Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;