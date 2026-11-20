import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Routing from './components/Routing.jsx';

// Get root div element
const root = document.getElementById('root')

// Render page
createRoot(root).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
