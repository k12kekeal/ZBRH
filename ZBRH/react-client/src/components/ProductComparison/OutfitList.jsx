import React from 'react';
import 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';
import Outfit from './Outfit.jsx';




const OutfitList = () => (
  <div>
    <header id="nocard">YOUR OUTFIT</header>
    <Outfit />

  </div>
);

export default OutfitList;