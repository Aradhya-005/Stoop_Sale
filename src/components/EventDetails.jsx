import React, { useState } from 'react';
import '../style/EventDetails.css';
import Button from './Button';
import CountDown from './CountDown';
import Modal from './Modal';
import ShareButton from './ShareButton';
import Map from './Map';

const EventDetails = () => {
  const eventDate = "2024-07-20T10:00:00";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRSVP = (e) => {
    e.preventDefault();
    if (name && email) {
      setIsConfirmed(true);
      setSuccessMessage('Registered successfully');
      setTimeout(() => {
        setIsModalOpen(false);
        setIsConfirmed(false);
        setName(''); // Reset the name field
        setEmail(''); // Reset the email field
        setSuccessMessage(''); // Clear the success message
      }, 3000); // Close the modal after 3 seconds
    } else {
      alert('Please fill in all fields');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setName(''); 
    setEmail(''); 
    setIsConfirmed(false); 
    setSuccessMessage(''); 
  };

  return (
    <div className="event-details">
      <p className="event-date">Date: July 20, 2024</p>
      <p className="event-time">Time: 10:00 AM - 4:00 PM</p>
      <p className="event-location">Location: 2nd Pl. and Court St.</p>
      <p className="event-description">
        Join us for a neighborhood stoop sale featuring a variety of items from clothes to furniture. It's a great way to find unique treasures while supporting local sellers!
      </p>
      <div className='rsvp-countdown'>
        <CountDown targetDate={eventDate} />
      </div>
      <div className='share-rsvp'>
        <Button className="rsvp-button" onClick={openModal}>RSVP</Button> 
        <ShareButton />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {!isConfirmed ? (
          <form className="rsvp-form" onSubmit={handleRSVP}>
            <h3>RSVP for Brooklyn Stoop Sale</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Register</Button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        ) : (
          <div className="confirmation-message">
            <h4>Congratulations, {name}!</h4>
            <p>Thank you for your RSVP.</p>
          </div>
        )}
      </Modal>
      <Map />
    </div>
  );
};

export default EventDetails;
