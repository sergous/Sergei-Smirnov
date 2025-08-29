import React, { useState } from 'react'
    import { motion } from 'framer-motion'

    function Step4({ data, updateData, next, prev }) {
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
          <h1 className="text-2xl font-bold text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED] font-orbitron">Set Up Admin Access</h1>
          <p className="text-[#D1D5DB] font-inter">Provide admin details and invite initial members.</p>
          <input
            type="text"
            placeholder="Your full name"
            value={form.adminName || ''}
            onChange={(e) => setForm({ ...form, adminName: e.target.value })}
            className="w-full p-2 bg-[#1E1B4B] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:shadow-[0_0_8px_#7C3AED] text-[#D1D5DB] placeholder-[#D1D5DB]/50"
            required
            aria-label="Admin Name Input"
          />
          <input
            type="email"
            placeholder="admin@example.com"
            value={form.adminEmail || ''}
            onChange={(e) => setForm({ ...form, adminEmail: e.target.value })}
            className="w-full p-2 bg-[#1E1B4B] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:shadow-[0_0_8px_#7C3AED] text-[#D1D5DB] placeholder-[#D1D5DB]/50"
            required
            aria-label="Admin Email Input"
          />
          <textarea
            placeholder="member1@example.com, member2@example.com"
            value={form.invites || ''}
            onChange={(e) => setForm({ ...form, invites: e.target.value })}
            className="w-full p-2 bg-[#1E1B4B] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:shadow-[0_0_8px_#7C3AED] text-[#D1D5DB] placeholder-[#D1D5DB]/50"
            rows="3"
            aria-label="Invite Emails Input"
          />
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={prev}
              className="flex-1 bg-[#1E1B4B] text-[#D1D5DB] p-2 rounded border border-[#D1D5DB] hover:bg-[#7C3AED] transition-all font-orbitron"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#06B6D4] text-[#0A0A1F] p-2 rounded border-2 border-[#D1D5DB] hover:bg-[#EC4899] hover:shadow-[0_0_12px_#EC4899] transition-all font-orbitron"
            >
              Next
            </button>
          </div>
        </motion.form>
      )
    }

    export default Step4
