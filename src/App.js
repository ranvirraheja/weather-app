import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    }
  
render () {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <p>A five day forecast</p>
    </div>
  );
 }  
};

export default App;
