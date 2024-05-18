import { useState } from 'react'
import './App.css'
import Task from './components/task/Task';
import { listTask } from './data/Data';
import NewTask from './components/newTask/NewTask';


function App() {
  const [task, setTask] = useState(listTask);
  
  const addNewTask =  (onHandleAddNewTask) => {
    const taskData = { 
      task: onHandleAddNewTask,
      state: false      
    };
    setTask((e)=>[...e, taskData])
  }


  return (
    <>
      <NewTask onHandleAddNewTask={addNewTask}/>

      <Task
        tasks={task} />
    </>
  )
}

export default App
