import React, { useState } from 'react';
import './ContactForm.css';
import { getDatabase, ref, push } from 'firebase/database';
import { AiOutlineSend } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBCpdG6NpbUPLqSpt6UdgPCA86XfnkTpNs",
    authDomain: "resume-d8f63.firebaseapp.com",
    databaseURL: "https://resume-d8f63-default-rtdb.firebaseio.com",
    projectId: "resume-d8f63",
    storageBucket: "resume-d8f63.appspot.com",
    messagingSenderId: "42067576740",
    appId: "1:42067576740:web:d8e0f75f7ee7d250bae331",
    measurementId: "G-4HJE0FZBLL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase();
    const formSubmissionsRef = ref(database, 'formSubmissions');

    const newSubmission = {
      name,
      email,
      message
    };

    push(formSubmissionsRef, newSubmission)
      .then(() => {
        console.log('Form data saved to Firebase');
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error saving form data:', error);
      });
  };

  return (
    <div className="contact-form-section">
      <div className="purple-box">
        <h1 style={{ fontSize: "2.6em" }}>
          CONTACT <span className="purple"> ME </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <Button
            variant="primary"
            type="Submit"
            style={{ maxWidth: "250px" }}
          >
            Submit <AiOutlineSend />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
