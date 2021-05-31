
import React from 'react';
import { render } from 'react-dom';

import Todolist from './components/Todolist/todolist';


const rootReactElement = <Todolist />;

const target = document.getElementById('root');

render(rootReactElement, target);
