import React, { useState } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const NewTask = ({ onHandleAddNewTask }) => {
    const [textTask, setTextTask] = useState('');

    const handleNewTask = (e) => {
        setTextTask(e.target.value);
    };
    const handleAddNewTask = (e) => { 
        e.preventDefault();
        onHandleAddNewTask(textTask);
        setTextTask('');
    }
    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Add Task"
                    aria-describedby="basic-addon2"
                    onChange={handleNewTask}
                    value={setTextTask}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleAddNewTask}>
                    Add
                </Button>
            </InputGroup>
        </div>
    )
}
NewTask.PropTypes = {
    onHandleAddNewTask: PropTypes.func.isRequired
}

export default NewTask