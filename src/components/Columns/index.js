// --> IMPORT YARN <---
import React from 'react';

// --> IMPORT COMPONENTS <---
import Card from '../Card';

// --> IMPORT LIBRARY <---
import { Droppable } from 'react-beautiful-dnd';

// --> IMPORT COMPONENTS <---
import Counter from '../Counter';

// --> IMPORT SCSS <---
import './columns.scss';


// =====______ COMPONENT ______=====
////////////////////////////////////
const Columns = ({ dataColumn, dataTasks }) => {

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '	color: rgba(255, 255, 255, 0)' : 'color : rgba(96, 96, 96, 0.356)'
  });
  
  return (
    <div className="columns">

      <h1 className="columns__title">{dataColumn.title}</h1>
      <Counter />
      <Droppable droppableId={dataColumn.id}>
        {(provider, snapshot) => (
          <div {...provider.droppableProps}
            ref={provider.innerRef}
            className="columns__div-drop"
            style={getListStyle(snapshot.isDraggingOver)}>
            {
              dataTasks.map((task, index) => (
                <Card key={task.id} task={task} index={index} />
              ))
            }
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
};

// == Export
export default Columns;