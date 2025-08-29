import React from 'react'

    function Dashboard() {
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E1B4B] to-[#0A0A1F] flex items-center justify-center">
          <div className="text-center bg-[#1E1B4B]/80 border border-[#7C3AED] rounded-lg p-6 shadow-lg shadow-[#7C3AED]/50">
            <h1 className="text-3xl font-bold text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED] font-orbitron">Welcome to Your Dashboard</h1>
            <p className="text-[#D1D5DB] mt-4 font-inter">Club Created! Welcome to LetsMake.</p>
            <a href="/onboarding" className="text-[#06B6D4] hover:text-[#EC4899] mt-4 block font-inter transition">Restart Onboarding</a>
          </div>
        </div>
      )
    }

    export default Dashboard
