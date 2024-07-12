import React, { useState } from 'react';
import '../style/ShareButton.css';

 import {FaShareAlt, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

const ShareButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const shareUrl = window.location.href; // Get the current page URL
    const message = "Check out this awesome event!"; 
  
    const handleShare = (platform) => {
      let url;
      switch (platform) {
        case 'whatsapp':
          url = `https://wa.me/?text=${encodeURIComponent(message + ' ' + shareUrl)}`;
          break;
        case 'twitter':
          url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message + ' ' + shareUrl)}`;
          break;
        case 'instagram':
          alert("Instagram does not allow direct sharing of links. You can copy the link and share it on Instagram.");
          return;
        default:
          return;
      }
      window.open(url, '_blank');
    };
  
    return (
      <div className="share-icons">
        <span className='share' onClick={() => setIsOpen(!isOpen)}>Share <FaShareAlt  /></span>
        {isOpen && (
          <div className="social-icons">
            <FaWhatsapp onClick={() => handleShare('whatsapp')} />
            <FaTwitter onClick={() => handleShare('twitter')} />
            <FaInstagram onClick={() => handleShare('instagram')} />
          </div>
        )}
      </div>
    );
};

export default ShareButton;
