import React from 'react';
import PropTypes from 'prop-types';


const Task = ({ id, label, done, changeTaskDone }) => (
  <li>
    <label
      htmlFor={`checkbox${id}`}
      className={done ? 'tasks__item tasks__item--done' : 'tasks__item'}
    >
      <input
        id={`checkbox${id}`}
        type="checkbox"
        checked={done}
        onChange={changeTaskDone(id)}
      />
      {label} 
    </label> 
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  changeTaskDone: PropTypes.func.isRequired,
};


export default Task;