import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {
  const INITIAL_STATE = {
    name: "",
    qty: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData.name, formData.qty);
    setFormData(INITIAL_STATE);
  };
 
  return (
    <form onSubmit={handleSubmit} className="form" >
      <label htmlFor="name">Product</label>
<div className="input-box">
      <input
      className="first-input"
        id="name"
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
      className="second-input"
        id="qty"
        type="text"
        name="qty"
        placeholder="qty"
        value={formData.qty}
        onChange={handleChange}
      />
</div>
      <button>Add Item</button>
    </form>
  );
};

export default NewItemForm;