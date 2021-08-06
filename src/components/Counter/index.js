// --> IMPORT YARN <---
import React from 'react';

// --> IMPORT COMPONENTS <---
import Form from '../Form';

// --> IMPORT SCSS <---
import './counter.scss';


// =====______ COMPONENT ______=====
////////////////////////////////////
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      newTaskLabel: '',
    };
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <div className="counter">
        <div className={this.state.active ? 'counter__bloc-none' : 'counter__bloc'}><h1 className="counter__title">Tâches</h1>
          <h1 className="counter__add-icone">
            <img
              onClick={this.toggleClass} src="https://img.icons8.com/color/48/000000/plus--v3.png" />
          </h1>
        </div>
        <div className={this.state.active ? 'form' : 'form-none'}>
          <Form />
        </div>
      </div>
    )
  }
};

// == Export
export default Counter;