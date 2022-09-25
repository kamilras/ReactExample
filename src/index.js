import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListItems from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Bartek",
      sex: "male"
    },
    {
      id: 2,
      age: 15,
      name: "Kasia",
      sex: "female"
    },
    {
      id: 3,
      age: 10,
      name: "Łukasz",
      sex: "male"
    }
  ]
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListItems data={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
