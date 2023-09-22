// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
// import { TodoForm } from './TodoForm'
// import { v4 as uuidv4 } from 'uuid';
// import { Todo } from './Todo';
// import { EditTodoForm } from './EditTodoForm';
// // import {ScrollButton} from './ScrollButton';
// uuidv4();
// {/* <script src="https://use.fontawesome.com/3a2eaf6206.js"></script> */}
// // import "./Modal.css";

// export default function Modal(/*{scrollToTarget}*/) {
//   const [modal, setModal] = useState(false);
//   //   const[displayList, setDisplayList] = useState(false);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [textInputName, setTextInputName] = useState('');
//   const [textInputDesc, setTextInputDesc] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
  
//   const [entries, setEntries] = useState([]);
  
//   const toggleModal = () => {
//     setModal(!modal);
//   };
  
//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }
  
//   const handleInputChangeName = (e) => {
//     setTextInputName(e.target.value);
//   };
  
//   const handleInputChangeDesc = (e) => {
//     setTextInputDesc(e.target.value);
//   };
  
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newEntry = {
//       textInputName,
//       textInputDesc,
//       selectedImage,
//     };
    
//     setEntries([...entries, newEntry])
    
//     console.log(entries[0])
    
//     addTodo(textInputName, selectedImage);
//     setTextInputName('');
//     setTextInputDesc('');
//     setSelectedImage(null);
//     setIsFormVisible(false);
    
//     setModal(!modal);
    
//   };
  
//   const [todos, setTodos] = useState([])
  
//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos);
//   }, []);
  
  
  
//   const addTodo = (todo) => {
//     const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
//     setTodos(newTodos);
//     localStorage.setItem('todos', JSON.stringify(newTodos));
//   }
  
//   const toggleComplete = id => {
//     const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
//     setTodos(newTodos);
//     localStorage.setItem('todos', JSON.stringify(newTodos));
//   }
  
//   const deleteTodo = id => {
//     const newTodos = todos.filter(todo => todo.id !== id);
//     setTodos(newTodos);
//     localStorage.setItem('todos', JSON.stringify(newTodos));
//   }
  
//   // const editTodo = id => {
//   //   setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
//   // }

//   const editTodo = (index, updatedEntry) => {
//     const updatedEntries = [...entries];
//     updatedEntries[index] = updatedEntry;
//     setEntries(updatedEntries);
//     localStorage.setItem('todos', JSON.stringify(updatedEntries));
//   };
  
//   const editTask = (task, id) => {
//     const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
//     setTodos(newTodos);
//     localStorage.setItem('todos', JSON.stringify(newTodos));
//   }
  
//   /*--------------------*/
  
//   // const ScrollButton = () => {
//   //     const targetRef = useRef(null);
  
//   //     const scrollToDiv = () => {
//   //       targetRef.current.scrollIntoView({ behavior: 'smooth' });
//   //     };
  
  
//   return (
//     <div className="modal-container">
//     {/* <button onClick={() =>{scrollToTarget(); toggleModal();}} className="btn-modal"> */}
//     <button onClick={toggleModal} className="btn-modal">
//     Add Product
//     </button>
    
    
    
//     {modal && (
//       <div className="modal">
//       <div onClick={toggleModal} className="overlay"></div>
//       <div className="modal-content">
//       <input
//       type="text"
//       className="text-input"
//       value={textInputName}
//       onChange={handleInputChangeName}
//       placeholder="Enter Product Name"
//       />
//       <input
//       type="text"
//       className="text-input"
//       value={textInputDesc}
//       onChange={handleInputChangeDesc}
//       placeholder="Enter Product Description"
//       />
      
//       <label htmlFor="inputTag">
//       Select Image <br/>
//       <FontAwesomeIcon icon={faCameraRetro} className="camera"/>
//       <input
//       id="inputTag"
//       type="file"
//       accept="image/*"
//       key={selectedImage}
//       onClick={() => console.log('Clicked')}
//       onChange={handleImageChange}
//       />
//       <br/>
//       <span id="imageName"></span>
//       </label>
//       <button type="submit" className='submit-btn' onClick={handleSubmit}>SUBMIT</button>
      
//       <button className="close-modal" onClick={toggleModal}>
//       CLOSE
//       </button>
//       </div>
//       </div>
//       )}
      
      
//       <div className='TodoWrapper'>
//       {/* <TodoForm addTodo={addTodo} /> */}
//       {/* {todos.map((todo, index) => (
//         todo.isEditing ? (
//           <EditTodoForm editTodo={editTask} task={todo} />
//           ) : (
//             <Todo task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
//             )
            
//           ))} */}
//           {entries.map((entry, index) => (
//             entry.isEditing ? (
//               <EditTodoForm editTodo={editTask} task={entry} />
//               ) : (
//                 <Todo
//                 key={index}
//                 task={entry}
//                 toggleComplete={() => {}}
//                 editTodo={() => {
//                   const updatedEntry = { ...entry, isEditing: true };
//                   editTodo(index, updatedEntry);
//                 }}
//                 deleteTodo={() => {
//                   const updatedEntries = [...entries];
//                   updatedEntries.splice(index, 1);
//                   setEntries(updatedEntries);
//                 }}
//                 // editTodo={() => editTodo()}
//                 // deleteTodo = {deleteTodo}
//                 // editTodo={editTodo}
//                 />)
//                 ))}
                
//                 </div>
                
                
//                 </div>
//                 );
//               }//}
              

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

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

  // const editTodo = (index, updatedEntry) => {
  //   const updatedEntries = [...entries];
  //   updatedEntries[index] = updatedEntry;
  //   setEntries(updatedEntries);
  //   localStorage.setItem('todos', JSON.stringify(updatedEntries));
  // };

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
            // entry.isEditing ? (
            //   <EditTodoForm
            //     key={index}
            //     editTodo={(updatedEntry) => editTodo(index, updatedEntry)}
            //     task={entry}
            //   />
            // ) : (
              <Todo
                key={index}
                task={entry}
                toggleComplete={() => {}}
                deleteTodo={() => deleteTodo(index)}
                // editTodo={() => {
                //   const updatedEntry = { ...entry, isEditing: true };
                //   editTodo(index, updatedEntry);
                // }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
