import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

import {
  Learn1,
  List,
  Ref,
  Parent,
  DemoStyle,
  Progress,
  CustCSS,
  RenderList,
  RenderObj,
  RenderKey,
} from './PagesRoutes'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/learn1" element={<Learn1 />} />
        <Route path="/list" element={<List />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/demoStyle" element={<DemoStyle />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/custCSS" element={<CustCSS />} />
        <Route path="/renderList" element={<RenderList />} />
        <Route path="/renderObj" element={<RenderObj />} />
        <Route path="/renderKey" element={<RenderKey />} />
    </Routes>
  </BrowserRouter>
)
