// --> IMPORT YARN <---
import React from 'react';

// --> IMPORT LIBRARY <---
import { Draggable } from 'react-beautiful-dnd';

// --> IMPORT SCSS <---
import './card.scss';


// =====______ COMPONENT ______=====
////////////////////////////////////
const Card = ({ task, index }) => {

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: 'none',
        background: isDragging ? 'lightgreen' : 'color : rgba(255, 255, 255, 0.493)',
        ...draggableStyle
    });

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provider, snapshot) => (
                <div className="card"
                    {...provider.draggableProps}
                    {...provider.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provider.draggableProps.style)}
                    ref={provider.innerRef}>
                    <p>{task.content}</p>
                </div>
            )}
        </Draggable>
    )
};

// == Export
export default Card;