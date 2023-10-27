import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { category } = useParams();
  const [editedCategory, setEditedCategory] = useState(category);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => setEditedCategory(e.target.value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedCategory(category); // Reset to the original category value
  };

  const handleDeleteClick = () => {
    navigate('/');
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="card-title">Edit Category</h2>
        </div>
        <div className="card-body">
          {isEditing ? (
            <div className="mb-3">
              <input
                type="text"
                value={editedCategory}
                onChange={handleCategoryChange}
                className="form-control"
              />
            </div>
          ) : (
            <div className="mb-3">
              <p className="h5">Category Name:</p>
              <p>{editedCategory}</p>
            </div>
          )}
          {isEditing ? (
            <div className="text-center">
              <button
                onClick={handleSaveClick}
                className="btn btn-success mx-2"
              >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="btn btn-secondary mx-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={handleEditClick}
                className="btn btn-primary mx-2"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="btn btn-danger mx-2"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;
