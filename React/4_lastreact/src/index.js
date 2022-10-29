import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './components/Car';
import TodoApp from './components/TodoApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* webpack : web uygulamalarında kullanılan JS dosyalarını tek parça haline 
             getirmek için kullanılan modül paketleyicidir.
 */
reportWebVitals();
