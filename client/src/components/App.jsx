// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
// import Overview from './overview/Overview.jsx';
// import Ratings from './ratings-reviews/Ratings.jsx';
import ReviewList from './ratings-reviews/ReviewList.jsx';
// import Overview from './overview/Overview.jsx';
// import Related from './related/Related.jsx'

const App = (props) => {
  const [test, setTest] = useState(true);

  return (
    <>
      <h1 style={{ fontFamily: 'Staatliches' }}>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
      {/* <Overview /> */}
      {/* <Related /> */}
      {/* <ReviewList /> */}
    </>
  );
};

export default App;
