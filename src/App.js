import React from 'react';
import logo from './logo.svg';
import './App.css';

import D1Image from "./D1.JPG";
import D2Image from "./D2.JPG";
import D3Image from "./D3.JPG";
import D4Image from "./D4.JPG";
 
function App() {
  return ( 
    <div className="App">
      <header className="App-header">
		<div>DevSecOps Executive Dashboard </div>
      </header>
	  <table width="100%">
		<tr>
			<td width="70%"><img width="100%" height="100%" src={D1Image}/></td>
			<td width="30%"><img width="100%" height="100%"  src={D3Image}/></td>
		</tr>
		<tr>
			<td width="70%"><img width="100%" height="100%" src={D2Image}/></td>
			<td width="30%"><img width="100%" height="100%"  src={D4Image}/></td>
		</tr>
	  </table>
    </div>
 
  );
}

export default App;
