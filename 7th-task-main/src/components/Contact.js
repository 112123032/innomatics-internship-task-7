import React, { useState } from 'react';
import './styles.css'; 

function Contact() {
    const [formData, setFormData] = useState({ name: '', contactNumber: '', email: '', course: '', trainingMode: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Please enter your name';

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.contactNumber || !phoneRegex.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Please enter a valid 10-digit contact number';
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address ending with @gmail.com';
        }

        if (!formData.course) newErrors.course = 'Please select a course';
        if (!formData.trainingMode) newErrors.trainingMode = 'Please select a training mode';
        
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form Submitted', formData);
            setSuccessMessage('Thank you for registering! We will contact you soon.');
            setFormData({ name: '', contactNumber: '', email: '', course: '', trainingMode: '' });
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-form-container">
                <h2>Contact Form</h2>
                {successMessage && <div className="success-message">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                    
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Enter your phone number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        maxLength="10"
                    />
                    {errors.contactNumber && <div className="error-message">{errors.contactNumber}</div>}
                    
                    <input
                        type="text"
                        name="email"
                        placeholder="Type your e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                    
                    <select name="course" value={formData.course} onChange={handleChange} required>
                        <option value="" disabled>Select Course..</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                    </select>
                    {errors.course && <div className="error-message">{errors.course}</div>}
                    
                    <select name="trainingMode" value={formData.trainingMode} onChange={handleChange} required>
                        <option value="" disabled>Select Training Mode</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                    {errors.trainingMode && <div className="error-message">{errors.trainingMode}</div>}
                    
                    <button type="submit">Register Now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact; 
