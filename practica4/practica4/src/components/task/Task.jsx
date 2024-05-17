import React from 'react'
import { ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Task = ({ tasks }) => {

    return (
        <div>
            <ListGroup as="ol" numbered >
                {tasks.map((task, index) => (
                    <ListGroup.Item as="li" key={index}>{task.name} </ListGroup.Item>
                ))}

            </ListGroup></div>
    )
};

Task.PropTypes = {
    tareas: PropTypes.array
};

export default Task