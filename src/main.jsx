import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

import {
  Learn1
} from './PagesRoutes'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/learn1" element={<Learn1 />} />
    </Routes>
  </BrowserRouter>
)
