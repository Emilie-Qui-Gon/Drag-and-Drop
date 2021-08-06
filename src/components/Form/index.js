// --> IMPORT YARN <---
import React from 'react';

// --> IMPORT SCSS <---
import './form.scss';


// =====______ COMPONENT ______=====
////////////////////////////////////
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskLabel: '',
    }
  }

  handleChange = (event) => {
    this.setState(
      { newTaskLabel: event.target.value })
    console.log(this.state.newTaskLabel)
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form__item"
          placeholder="Ajouter une tâche"
          value={this.state.newTaskLabel}
          onChange={this.handleChange}
        />

        <img src="https://img.icons8.com/ios-glyphs/30/000000/arrow.png" onClick={this.addTask} />
      </form>
    );
  }
}


// == Export
export default Form;