import React from 'react';
import PropTypes from 'prop-types';

import Task from './task';
import './tasks.scss';

const Tasks = ({ tasks, changeTaskDone }) => (
  <ul className="tasks">
    {
      tasks.map((task) => <Task key={task.id} {...task} changeTaskDone={changeTaskDone} />)
    }
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
  changeTaskDone: PropTypes.func.isRequired,
};


export default Tasks;