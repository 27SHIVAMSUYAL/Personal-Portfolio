import React, { useState } from 'react';
import './EmailForm.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // To handle loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (name === '' || email === '' || subject === '' || message === '') {
      toast.error('Please fill all the fields');
      return;
    }

    // Set loading state before making the API request
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:8000/api/email/SendEmail', { name, email, subject, message });

      if (res.data.success) {
        toast.success('Email Sent');
      } else {
        toast.error('Email not sent');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the email');
    } finally {
      setLoading(false); // Reset loading state after request completion
    }
  };

  return (
    <div className="email-form">
      <h1>Email Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EmailForm;
