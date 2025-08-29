import React from 'react'

    function ProgressBar({ step, total }) {
      const progress = (step / total) * 100
      return (
        <div className="w-full max-w-md mb-8 relative z-10">
          <div className="flex justify-between text-sm text-[#D1D5DB] mb-2">
            {Array.from({ length: total }, (_, i) => (
              <span key={i} className={`transition-all ${i + 1 <= step ? 'text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED]' : ''}`}>{i + 1}</span>
            ))}
          </div>
          <div className="w-full bg-[#1E1B4B] rounded-full h-2 border border-[#D1D5DB]">
            <div
              className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_#7C3AED]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )
    }

    export default ProgressBar
