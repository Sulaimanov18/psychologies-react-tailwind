import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your custom styles
import 'antd/dist/reset.css'; // Import Ant Design styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
