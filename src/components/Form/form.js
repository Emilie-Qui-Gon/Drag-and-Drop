import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.newTaskLabelRef = React.createRef();
  }

  componentDidMount = () => {
    this.newTaskLabelRef.current.focus();
  }

  handleSubmit = (event) => {
    const { submitTask } = this.props;
    event.preventDefault();
    submitTask();
  }


  handleChange = (event) => {
    const { setNewTaskLabel } = this.props;
    const { value } = event.target;
    setNewTaskLabel(value);
  }

  render() {
    const { newTaskLabel } = this.props;
    

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {
        }
        <input
          ref={this.newTaskLabelRef}
          type="text"
          className="form__item"
          placeholder="&#x2712; Nouvelle tâche"
          value={newTaskLabel}
          onChange={this.handleChange}
          />
     
      </form>
    );
  }
}

Form.propTypes = {
  submitTask: PropTypes.func.isRequired,
  newTaskLabel: PropTypes.string.isRequired,
  setNewTaskLabel: PropTypes.func.isRequired,
};

export default Form;
