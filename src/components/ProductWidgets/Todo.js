import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import defaultProductImg from '../defaultClubs.jpeg';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {

  const imageUrl = task.selectedImage instanceof Blob
  ? URL.createObjectURL(task.selectedImage)
  : '';

  return (
    <div className="Todo">
      <img src={imageUrl} alt='Default' className='defaultImage' />
      <div className='product-details'>
        <p className='product-name'>{task.textInputName}</p>
        <div className='separator'></div>
        <p className='product-description'>{task.textInputDesc}</p>
      </div>
      <div>
        {/* <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} /> */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
