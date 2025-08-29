import React, { useState } from 'react'
    import { motion } from 'framer-motion'

    function Step1({ data, updateData, next }) {
      const [form, setForm] = useState(data)

      const handleSubmit = (e) => {
        e.preventDefault()
        updateData(form)
        next()
      }

      return (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED] font-orbitron">Create Your Club</h1>
          <p className="text-[#D1D5DB] font-inter">Let's start making your community. Enter the basic details for your club.</p>
          <input
            type="text"
            placeholder="e.g., LetsMake Coders"
            value={form.name || ''}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 bg-[#1E1B4B] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:shadow-[0_0_8px_#7C3AED] text-[#D1D5DB] placeholder-[#D1D5DB]/50"
            required
            aria-label="Club Name Input"
          />
          <textarea
            placeholder="Describe your club's purpose, e.g., Collaborative coding projects"
            value={form.description || ''}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-2 bg-[#1E1B4B] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:shadow-[0_0_8px_#7C3AED] text-[#D1D5DB] placeholder-[#D1D5DB]/50"
            rows="3"
            required
            aria-label="Club Description Input"
          />
          <select
            value={form.niche || ''}
            onChange={(e) => setForm({ ...form, niche: e.target.value })}
            className="w-full p-2 bg-[#1E1B4B] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:shadow-[0_0_8px_#7C3AED] text-[#D1D5DB]"
            required
            aria-label="Niche Selection"
          >
            <option value="" className="bg-[#1E1B4B]">Select a niche</option>
            <option value="Tech" className="bg-[#1E1B4B]">Tech</option>
            <option value="Art" className="bg-[#1E1B4B]">Art</option>
            <option value="Business" className="bg-[#1E1B4B]">Business</option>
            <option value="Hobbies" className="bg-[#1E1B4B]">Hobbies</option>
            <option value="Other" className="bg-[#1E1B4B]">Other</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#06B6D4] text-[#0A0A1F] p-2 rounded border-2 border-[#D1D5DB] hover:bg-[#EC4899] hover:shadow-[0_0_12px_#EC4899] transition-all font-orbitron"
          >
            Next
          </button>
        </motion.form>
      )
    }

    export default Step1
