import React, { useState } from 'react'
    import { motion } from 'framer-motion'

    function Step2({ data, updateData, next, prev }) {
      const [form, setForm] = useState(data)
      const [logo, setLogo] = useState(null)

      const handleFile = (e) => {
        const file = e.target.files[0]
        if (file) setLogo(URL.createObjectURL(file))
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        updateData({ ...form, logo })
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
          <h1 className="text-2xl font-bold text-[#7C3AED] drop-shadow-[0_0_8px_#7C3AED] font-orbitron">Brand Your Club</h1>
          <p className="text-[#D1D5DB] font-inter">Make your club stand out with a logo and color scheme.</p>
          <div className="border-2 border-dashed border-[#06B6D4] p-4 text-center hover:border-[#EC4899] hover:shadow-[0_0_8px_#EC4899] transition-all">
            <input type="file" accept="image/*" onChange={handleFile} className="hidden" id="logo" />
            <label htmlFor="logo" className="cursor-pointer text-[#D1D5DB] font-inter">Upload PNG/JPG (optional)</label>
            {logo && <img src={logo} alt="Logo preview" className="mt-2 w-32 h-32 mx-auto border border-[#D1D5DB]" />}
          </div>
          <div className="space-y-2">
            <label className="text-[#D1D5DB] font-inter">Color Scheme:</label>
            {[
              { color: '#7C3AED', name: 'Violet' },
              { color: '#06B6D4', name: 'Cyan' },
              { color: '#D1D5DB', name: 'Silver' }
            ].map(scheme => (
              <label key={scheme.color} className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value={scheme.color}
                  checked={form.color === scheme.color}
                  onChange={(e) => setForm({ ...form, color: e.target.value })}
                  className="mr-2"
                />
                <div
                  className="w-4 h-4 rounded-full border border-[#D1D5DB] hover:shadow-[0_0_8px_currentColor] transition-all"
                  style={{ backgroundColor: scheme.color }}
                ></div>
                <span className="ml-2 text-[#D1D5DB]">{scheme.name}</span>
              </label>
            ))}
          </div>
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

    export default Step2
