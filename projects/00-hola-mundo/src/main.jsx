import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));

// Componentes deben ser PascalCase
const SpecialButton = ({ text }) => {
  return <button>{text}</button>;
};
root.render(
  // <React.Fragment>
  //   <SpecialButton text="Button 1" />
  // </React.Fragment>
  <App />
);
