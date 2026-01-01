import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Timer from './components/timer';
// import Form from './components/Myforms';
import App from './App';
import Result from './res';
// import FavCo from './components/Fav';
// import Car from './components/car';
// import Scoot from './components/scooter';
// import List from './components/list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {/* <FavCo/>
    <Car/>
    <Scoot/>
    <List/>
    <Timer/> */}
    {/* <Form/> */}
    <App/>
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
