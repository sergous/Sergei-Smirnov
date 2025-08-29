import React, { useState, useEffect } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { motion } from 'framer-motion'
    import Step1 from '../components/Step1.jsx'
    import Step2 from '../components/Step2.jsx'
    import Step3 from '../components/Step3.jsx'
    import Step4 from '../components/Step4.jsx'
    import Step5 from '../components/Step5.jsx'
    import ProgressBar from '../components/ProgressBar.jsx'
    import StarryBackground from '../components/StarryBackground.jsx'

    function Onboarding() {
      const [step, setStep] = useState(1)
      const [data, setData] = useState(JSON.parse(localStorage.getItem('onboardingData')) || {})
      const navigate = useNavigate()

      useEffect(() => {
        localStorage.setItem('onboardingData', JSON.stringify(data))
      }, [data])

      const nextStep = () => setStep(step + 1)
      const prevStep = () => setStep(step - 1)
      const updateData = (newData) => setData({ ...data, ...newData })

      const steps = [
        <Step1 key={1} data={data} updateData={updateData} next={nextStep} />,
        <Step2 key={2} data={data} updateData={updateData} next={nextStep} prev={prevStep} />,
        <Step3 key={3} data={data} updateData={updateData} next={nextStep} prev={prevStep} />,
        <Step4 key={4} data={data} updateData={updateData} next={nextStep} prev={prevStep} />,
        <Step5 key={5} data={data} navigate={navigate} />
      ]

      return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E1B4B] to-[#0A0A1F] flex flex-col items-center justify-center p-4 relative overflow-hidden">
          <StarryBackground />
          <ProgressBar step={step} total={5} />
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-md bg-[#1E1B4B]/80 border border-[#7C3AED] rounded-lg p-6 shadow-lg shadow-[#7C3AED]/50 relative z-10"
          >
            {steps[step - 1]}
          </motion.div>
        </div>
      )
    }

    export default Onboarding
