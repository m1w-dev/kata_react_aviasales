import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';

import App from './components/App';

import './index.scss';

const root = createRoot(document.getElementById('Aviasales'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
