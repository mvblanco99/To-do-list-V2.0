import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskProvider from './context/TaskProvider.jsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
)
