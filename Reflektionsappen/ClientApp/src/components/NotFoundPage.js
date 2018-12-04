import React from 'react';
import {Link} from 'react-router-dom'

//Use link so as to use client side routing, not the server side, so we skip refreshing the page when clicking
const NotFoundPage =()=>(
  <div>
    404 - <Link to="/reflections"> Go home </Link>
  </div>
);

export default NotFoundPage;
