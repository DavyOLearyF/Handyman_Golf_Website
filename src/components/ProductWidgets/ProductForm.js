import React, { useState } from 'react';

const FormToggle = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [textInputName, setTextInputName] = useState('');
  const [textInputDesc, setTextInputDesc] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

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

    // Build a message with the text and image
    const message = `
      <p><strong>Name:</strong> ${textInputName}</p>
      <p><strong>Description:</strong> ${textInputDesc}</p>
      ${selectedImage ? 
        `<div className='selected-image'>   
        <img src="${URL.createObjectURL(selectedImage)}" alt="Selected"/>
        </div>` : ''}
    `;          //not working correctly

    // Create a custom modal or dialog to display the message
    alertWithHTML(message);

    setTextInputName('');
    setTextInputDesc('');
    setSelectedImage(null);
    setIsFormVisible(false);
  };

  // Function to display a custom modal with HTML content
  const alertWithHTML = (htmlContent) => {
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = htmlContent;

    // Append the modal to the document body
    document.body.appendChild(modal);

    // Remove the modal after some time (e.g., 5 seconds)
    setTimeout(() => {
      modal.remove();
    }, 5000);
  };

  return (
    <div className="form-container">
      <button onClick={toggleForm} className='product-btn'>
        {isFormVisible ? 'Hide' : 'Add Product'}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
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

          <label htmlFor="imageInput" className='image-input'>Select an Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit" className='product-btn'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default FormToggle;