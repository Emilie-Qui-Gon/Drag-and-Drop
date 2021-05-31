import React from 'react';

import Form from '../Form/form';
import Counter from '../../components/Counter/counter';
import Tasks from '../Tasks/tasks';

import tasksData from '../../data/tasks';

import './todolist.scss';


class TodoList extends React.Component {
 
  state = {
   
    tasks: tasksData,
    newTaskLabel: '',
  }

  
  setNewTaskLabel = (newValue) => {
    this.setState(
      {
        newTaskLabel: newValue,
      },
    );
  }

  toggleTaskDone = (taskId) => () => {
    const { tasks } = this.state;
    const newTasks = tasks.map(
      (task) => {
        if (task.id === taskId) {

          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      },
    );
    this.setState(
      {
        tasks: newTasks,
      },
    );
  }


  getMaxId = () => {
    const { tasks } = this.state;
    const idList = tasks.map((task) => task.id).push(0);
    return Math.max(idList);
  }

  
  addTask = () => {
    const { tasks, newTaskLabel } = this.state;
    const newTask = {
      id: this.getMaxId() + 1,
      label: newTaskLabel,
      done: false,
    };
    const newTasks = [...tasks, newTask];
    this.setState(
      {
        tasks: newTasks,
        newTaskLabel: '',
      },
    );
  }

  render() {
    const { tasks, newTaskLabel } = this.state;
    const undoneTasksNumber = tasks.filter(
      (task) => !task.done,
    ).length;

    return (
      <div className="todo-list">
        <h1 className="todo-list__title">Liste de tâches à effectuer... &#x1f514;</h1>
        {
        }
       
        <Counter count={undoneTasksNumber} />
        <Tasks tasks={tasks} changeTaskDone={this.toggleTaskDone} /> 
        <Form
          submitTask={this.addTask}
          newTaskLabel={newTaskLabel}
          setNewTaskLabel={this.setNewTaskLabel}
        />
      </div>
    );
  }
}

export default TodoList;