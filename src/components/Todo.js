import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import defaultProductImg from './defaultClubs.jpeg'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <img src={task.selectedImage ? URL.createObjectURL(task.selectedImage) : defaultProductImg}  alt='Default' className='defaultImage'/>
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.textInputName}</p>
        <div>
        {/* <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id) } /> */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}