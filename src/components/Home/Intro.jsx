import React from 'react'
import PropTypes from 'prop-types'
import profile from '../../assets/pranayImg.jpg'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import './../../css/fonts.css'

export default function Intro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  // const theme = useSelector((state) => state.mode.darkMode)

  function BounceSpan({ children }) {
    return (
      <motion.span
        whileHover={{ y: -10 }}
        style={{ color: colorTheme.mainHeading }}
        className=""
      >
        {children}
      </motion.span>
    )
  }

  BounceSpan.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
      className="w-full flex flex-col items-center text-center gap-4 lg:gap-8 max-w-[600px]  h-screen"
      style={{
        color: colorTheme.primaryText,
        fontFamily: 'Pacifico, cursive',
      }}
    >
      <span id="intro" className=" h-[4rem]"></span>
      <div className="max-w-[200px] w-full">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          src={profile}
          alt="profile"
          className="w-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 items-center  ">
        <div
          className="text-4xl font-bold"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          <BounceSpan>P</BounceSpan>
          <BounceSpan>R</BounceSpan>
          <BounceSpan>A</BounceSpan>
          <BounceSpan>T</BounceSpan>
          <BounceSpan>Y</BounceSpan>
          <BounceSpan>U</BounceSpan>
          <BounceSpan>S</BounceSpan>
          <BounceSpan>H</BounceSpan>
          <BounceSpan>{` `}</BounceSpan>
          <BounceSpan>G</BounceSpan>
          <BounceSpan>U</BounceSpan>
          <BounceSpan>P</BounceSpan>
          <BounceSpan>T</BounceSpan>
          <BounceSpan>A</BounceSpan>
        </div>
        <h2 className="text-2xl font-bold">Full Stack AI/ML Developer</h2>
        <p className="text-xl text-justify">
          From machine learning models to full-stack applications, I thrive on
          solving real-world problems with technology. <br />
          <strong>Expertise in:</strong> AI, NLP, Computer Vision, and Web
          Development. <br />
          <strong>Currently working on:</strong> Smart Glasses for the Visually
          Impaired & NLP-powered Applications. <br />
          <br />
        </p>
      </div>
    </motion.div>
  )
}
