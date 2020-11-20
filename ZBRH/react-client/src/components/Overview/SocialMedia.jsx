import React from 'react';
import './overview.css';
import Modal from '@material-ui/core/Modal';

const SocialMedia = () => (
  <div>
    <img
      className="share-button"
      src='./icon-facebook.png'></img>
    <img className="share-button" src='./icon-pinterest.png'></img>
    <img className="share-button" src='./icon-twitter.png'></img>
  </div>
);

export default SocialMedia;