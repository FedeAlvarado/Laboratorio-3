import React, { useState } from 'react'
import {InputGroup,Button,Form} from 'react-bootstrap'
import PropTypes from 'prop-types'

const NewTask = ({onHandleAddNewTask}) => {
const [textTask, setTextTask] = useState('');
      return (
    <div>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add Task"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={onHandleAddNewTask}>
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