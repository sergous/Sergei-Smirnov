import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Onboarding from './pages/Onboarding.jsx'
    import Dashboard from './pages/Dashboard.jsx'

    function App() {
      return (
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<div className="min-h-screen flex items-center justify-center"><a href="/onboarding" className="text-[#06B6D4] hover:text-[#EC4899] transition">Start Onboarding</a></div>} />
        </Routes>
      )
    }

    export default App
