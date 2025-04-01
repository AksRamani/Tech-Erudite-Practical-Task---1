import React, { useState } from 'react';
import { handleSubmitForm } from '../services/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.firstName = 'First Name is required';
    if (!formData.lname) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (!formData.description) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const result = await handleSubmitForm(formData); // Call the refactored function

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
        setIsSubmitted(false);
        }, 2500);
      } else {
        setIsSubmitted(false);
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod
          tempor incididunt ut labore et dolore magna aliquyam erat, sed diam voluptua
        </small>

        <div className="form-fields">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your first name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your last name"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select Budget</option>
              <option value="under_50k">Under £50k</option>
              <option value="50k_100k">£50k - £100k</option>
              <option value="above_100k">Above £100k</option>
            </select>
            {errors.budget && <span className="error">{errors.budget}</span>}
          </div>

          <div className="form-group">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter a brief description"
            />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitted}>{isSubmitted ? "Sucess" : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
