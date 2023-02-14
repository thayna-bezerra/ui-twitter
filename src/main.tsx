import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img src="" alt="Logo" />

        <nav></nav>

        <button></button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)
