import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Fix this line
import './index.css';
import App from './App.jsx';
import AuthContextProvider from './context/Authcontext/AuthContexProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </AuthContextProvider>
);
