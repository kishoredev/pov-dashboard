import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
		<div>DevSecOps Executive Dashboard </div>
      </header>
	<div className="widget"><iframe className="embed-container" src="http://pov-dashboard.s3-website-us-east-1.amazonaws.com/" /></div>
    <div className="widget"><iframe className="embed-container" src="http://www.eenadu.net" /></div>
    <div className="widget"><iframe className="embed-container" src="http://pov-dashboard.s3-website-us-east-1.amazonaws.com/" /></div>
    <div className="widget"><iframe className="embed-container" src="http://pov-dashboard.s3-website-us-east-1.amazonaws.com/" /></div>
    </div>

  );
}

export default App;
