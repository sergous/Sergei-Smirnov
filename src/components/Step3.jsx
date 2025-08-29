import React, { useState } from 'react'
    import { motion } from 'framer-motion'

    function Step3({ data, updateData, next, prev }) {
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
          <h1 className="text-2xl font-bold text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED] font-orbitron">Choose Club Features</h1>
          <p className="text-[#D1D5DB] font-inter">Select the features your club needs to thrive.</p>
          {[
            { key: 'events', label: 'Events', desc: 'Host and manage events' },
            { key: 'members', label: 'Member Management', desc: 'Track and manage members' },
            { key: 'messaging', label: 'Messaging', desc: 'Enable club chats' }
          ].map(feature => (
            <motion.label
              key={feature.key}
              className="flex items-start hover:shadow-[0_0_8px_#06B6D4] transition-all p-2 rounded"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="checkbox"
                checked={form[feature.key] || false}
                onChange={(e) => setForm({ ...form, [feature.key]: e.target.checked })}
                className="mr-2 mt-1 accent-[#06B6D4]"
              />
              <div>
                <strong className="text-[#06B6D4]">{feature.label}</strong>: {feature.desc}
              </div>
            </motion.label>
          ))}
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

    export default Step3
