import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { TodoForm } from '../ProductWidgets/TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../ProductWidgets/Todo';
import { EditTodoForm } from '../ProductWidgets/EditTodoForm';
import './ProductPopup.css';

uuidv4();

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [textInputName, setTextInputName] = useState('');
  const [textInputDesc, setTextInputDesc] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [entries, setEntries] = useState([]);
  
  const toggleModal = () => {
    setModal(!modal);
  };
  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setEntries(savedTodos);
  }, []);
  
  const handleInputChangeName = (e) => {
    setTextInputName(e.target.value);
  };
  
  const handleInputChangeDesc = (e) => {
    setTextInputDesc(e.target.value);
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEntry = {
      textInputName,
      textInputDesc,
      selectedImage,
    };
    
    setEntries([...entries, newEntry]);
    
    // Reset input fields
    setTextInputName('');
    setTextInputDesc('');
    setSelectedImage(null);
    
    // Close the modal
    setModal(false);
  };
  
  const deleteTodo = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    localStorage.setItem('todos', JSON.stringify(updatedEntries));
  };
  
  return (
    <div className="modal-container">
      <button onClick={toggleModal} className="btn-modal">
        Add Product
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <input
              type="text"
              className="text-input"
              value={textInputName}
              onChange={handleInputChangeName}
              placeholder="Enter Product Name"
            />
            <input
              type="text"
              className="text-input"
              value={textInputDesc}
              onChange={handleInputChangeDesc}
              placeholder="Enter Product Description"
            />
            
            <label htmlFor="inputTag">
              Select Image <br/>
              <FontAwesomeIcon icon={faCameraRetro} className="camera"/>
              <input
                id="inputTag"
                type="file"
                accept="image/*"
                key={selectedImage}
                onClick={() => console.log('Clicked')}
                onChange={handleImageChange}
              />
              <br/>
              <span id="imageName"></span>
            </label>
            <button type="submit" className='submit-btn' onClick={handleSubmit}>SUBMIT</button>
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <div className="spacer"/>
      <div className="product-box">
        <div className='TodoWrapper'>
          {entries.map((entry, index) => (
            <Todo
              key={index}
              task={entry}
              toggleComplete={() => {}}
              deleteTodo={() => deleteTodo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
