import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const onCategoryChanged = (e) => setCategory(e.target.value);

  const onSaveCategoryClicked = () => {
    if (category.trim() !== '') {
      navigate(`/edit-category/${category}`);
    } else {
      alert('Category cannot be empty. Please enter a category name.');
    }
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="card" style={{ maxWidth: '400px' }}>
        <div className="card-header bg-primary text-white">
          <h2 className="card-title">Add a New Category</h2>
        </div>
        <div className="card-body" style={{ backgroundColor: '#f0f0f0' }}>
          <form>
            <div className="mb-3">
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                value={category}
                onChange={onCategoryChanged}
                className="form-control"
                placeholder="Enter category name"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={onSaveCategoryClicked}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
