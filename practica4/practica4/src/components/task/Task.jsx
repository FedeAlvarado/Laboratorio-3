import React from 'react'
import { ListGroup,Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Task = ({ tasks }) => {

    return (
        <div>
            <ListGroup as="ol" numbered >
                {tasks.map((task, index) => (
                    <ListGroup.Item as="li" key={index}>{task.name}
                        <div className='container'>
                            {!task.complete ? <Button variant="success" id="button-addon2" >Completa
                            </Button> : <p>Realizada</p>}
                            <Button variant="outline-dark" id="button-addon2">
                                Borrar
                            </Button>
                        </div>

                    </ListGroup.Item>
                ))}

            </ListGroup></div>
    )
};

Task.PropTypes = {
    tareas: PropTypes.array
};

export default Task