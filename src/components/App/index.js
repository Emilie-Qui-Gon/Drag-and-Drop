// --> IMPORT YARN <---
import React from 'react';

// --> IMPORT COMPONENTS <---
import Header from '../Header';
import Tasks from '../Tasks';

// --> IMPORT DATA <---
import data from '../../data/data';

// --> IMPORT SCSS <---
import './app.scss';


// =====______ COMPONENT ______=====
////////////////////////////////////
class App extends React.Component {

    render() {

        return (
            <div className="todolist">
                <Header />
                <Tasks data={data} />
            </div>
        );
    }
}

export default App;

// icones : <a href="https://icons8.com/icon/cAd29bV1wGyF/plus">Plus icon by Icons8</a>