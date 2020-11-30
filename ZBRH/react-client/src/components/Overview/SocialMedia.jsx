import React from 'react';
import './overview.css';
import Modal from '@material-ui/core/Modal';

const SocialMedia = () => (
  <div>
    <a
      target="_blank"
      href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F3.14.142.186%2F&amp;src=sdkpreparse"
      class="fb-xfbml-parse-ignore">
      <img className="share-button" src='./icon-facebook.png'></img>
    </a>

    <a
      href="https://www.pinterest.com/pin/create/button/"
      target="_blank" data-pin-do="buttonBookmark">
      <img className="share-button" src='./icon-pinterest.png'></img>
    </a>
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-show-count="false"
      target="_blank" >
      <img className="share-button" src='./icon-twitter.png'></img>
    </a>
  </div>
);

export default SocialMedia;