import React, { useState } from 'react'
    import { motion } from 'framer-motion'
    import NovaSpinner from './NovaSpinner.jsx'

    function Step5({ data, navigate }) {
      const [loading, setLoading] = useState(false)

      const handleGenerate = () => {
        setLoading(true)
        // Mock Supabase save
        setTimeout(() => {
          console.log('Club data saved:', data)
          navigate('/dashboard')
        }, 3000)
      }

      return (
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED] font-orbitron">Launch Your Club</h1>
          <p className="text-[#D1D5DB] font-inter">You're ready to make your club live! Click to generate your app.</p>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-[#06B6D4] text-[#0A0A1F] p-4 rounded border-2 border-[#D1D5DB] hover:bg-[#EC4899] hover:shadow-[0_0_12px_#EC4899] transition-all w-48 mx-auto block font-orbitron disabled:opacity-50"
          >
            {loading ? <NovaSpinner /> : 'Generate Club App'}
          </button>
          <p className="text-sm text-[#D1D5DB]/70 font-inter">You'll be redirected to your dashboard.</p>
        </motion.div>
      )
    }

    export default Step5
